/* Mutagen: a text generator library
   Written by Andrew Plotkin <erkyrath@eblong.com>

   This is a modification of the Mutagen library
   (http://eblong.com/zarf/mutagen/). 

   Actually, it's largely a rewrite of that library. The original Treehouse app
   used a version of Mutagen ported to ObjC. But it set itself up rather
   differently, because its random numbers came from the tree-seed generator
   rather than Mutagen's "bank of primes" (which was always kind of silly).
   Also it wasn't stuck on Mutagen's really-totally-functional code model.

   So now I've ported the ObjC version back to Javascript. I wound up rewriting
   most of the code in the node objects (Sequence, Choice, etc). The
   stitch-it-together loop (the bulk of Factory) remains the same, though.
*/

/* A handful of special nodes which contain no code. These exist only
   to be compared via identity (===). 
*/
var SpecialNode = {
    Period: { special:'Period' },
    Semicolon: { special:'Semicolon' },
    Hyphen: { special:'Hyphen' },
    Dash: { special:'Dash' },
    Comma: { special:'Comma' },
    AAn: { special:'AAn' },
    AForm: { special:'AForm' },
    AnForm: { special:'AnForm' },
    Concat: { special:'Concat' }
};

function SequenceNode(/*...*/) {
    var argcopy = Array.prototype.slice.call(arguments);

    return function(build) {
        var argls = [];
        for (var ix=0; ix<argcopy.length; ix++) {
            var bfunc = build(argcopy[ix]);
            argls.push(bfunc);
        }

        return function(resarray, ctx) {
            for (var ix=0; ix<argls.length; ix++) {
                var bfunc = argls[ix];
                bfunc(resarray, ctx);
            }
        }
    }
}

function ChoiceNode(/*...*/) {
    var argcopy = Array.prototype.slice.call(arguments);

    return function(build) {
        var argls = [];
        for (var ix=0; ix<argcopy.length; ix++) {
            var bfunc = build(argcopy[ix]);
            argls.push(bfunc);
        }

        return function(resarray, ctx) {
            var ix = ctx.randomrange(argls.length);
            var bfunc = argls[ix];
            bfunc(resarray, ctx);
        }
    }
}

function ShuffleNode(/*...*/) {
    var argcopy = Array.prototype.slice.call(arguments);
    var key = argcopy.shift();

    return function(build) {
        var argls = [];
        for (var ix=0; ix<argcopy.length; ix++) {
            var bfunc = build(argcopy[ix]);
            argls.push(bfunc);
        }

        return function(resarray, ctx) {
            var remaining = ctx.shuffle[key];
            if (remaining == undefined) {
                remaining = [];
                ctx.shuffle[key] = remaining;
            }
            if (remaining.length == 0) {
                for (var val of argls)
                    remaining.push(val);
            }

            if (remaining.length) {
                var ix = ctx.randomrange(remaining.length);
                var bfunc = remaining[ix];
                remaining.splice(ix, 1);
                bfunc(resarray, ctx);
            }

            // could add anti-repeat code here, but eh
        }
    }
}

function OptNode(chance, node) {
    return function(build) {
        var bfunc = build(node);

        return function(resarray, ctx) {
            if (ctx.randomchance(chance)) {
                bfunc(resarray, ctx);
            }
        }
    }    
}

function AltWeightNode(/*...*/) {
    var argcopy = Array.prototype.slice.call(arguments);

    return function(build) {
        var argls = [];
        var total = 0.0;

        for (var ix=0; ix<argcopy.length; ix++) {
            var bfunc = build(argcopy[ix].node);
            var weight = argcopy[ix].weight;
            argls.push({ bfunc:bfunc, weight:weight });
            total += weight;
        }

        return function(resarray, ctx) {
            var val = ctx.randomuniform(total);
            var tot = 0.0;

            for (var pair of argls) {
                if (val < tot + pair.weight) {
                    pair.bfunc(resarray, ctx);
                    return;
                }
                tot = tot + pair.weight;
            }

            var pair = argls[argls.length-1];
            pair.bfunc(resarray, ctx);
        }
    }
}

function SetKeyNode(key, val, node) {
    return function(build) {
        var bfunc = null;
        if (node)
            bfunc = build(node);

        return function(resarray, ctx) {
            ctx.map[key] = val;
            if (bfunc)
                bfunc(resarray, ctx);
        }
    }
}

function SetOnceKeyNode(/*...*/) {
    var argcopy = Array.prototype.slice.call(arguments);
    var key = argcopy.shift();
    var node = argcopy.shift();

    return function(build) {
        var bfunc = null;
        if (node)
            bfunc = build(node);
        return function(resarray, ctx) {
            var val = ctx.map[key];
            if (!val) {
                var ix = ctx.randomrange(argcopy.length);
                val = argcopy[ix];
                ctx.map[key] = val;
            }
            if (bfunc)
                bfunc(resarray, ctx);
        }
    }
}

function IfKeyNode(key, val, truenode, falsenode) {
    return function(build) {
        var truebfunc = null;
        var falsebfunc = null;

        if (truenode)
            truebfunc = build(truenode);
        if (falsenode)
            falsebfunc = build(falsenode);

        return function(resarray, ctx) {
            var bfunc = null;
            if (ctx.map[key] == val)
                bfunc = truebfunc;
            else
                bfunc = falsebfunc;

            if (bfunc)
                bfunc(resarray, ctx);
        }
    }
}

function SwitchKeyNode(/*...*/) {
    var argcopy = Array.prototype.slice.call(arguments);
    var key = argcopy.shift();

    return function(build) {
        var argmap = {};
        var elsebfunc = null;

        for (var ix=0; ix<argcopy.length; ix++) {
            var bfunc = build(argcopy[ix].node);
            var casekey = argcopy[ix].key;
            if (casekey)
                argmap[casekey] = bfunc;
            else
                elsebfunc = bfunc;
        }

        return function(resarray, ctx) {
            var bfunc = argmap[ctx.map[key]];
            if (!bfunc)
                bfunc = elsebfunc;
            if (bfunc)
                bfunc(resarray, ctx);
        }
    }
}

function IdleNode(count) {
    return function(build) {
        return function(resarray, ctx) {
            for (var ix=0; ix<count; ix++) {
                ctx.randomuniform(1.0);
            }
        }
    }    
}

/* A seed object looks like { val:null, ls:null } if empty, or
   { val:INT, ls:null } if a leaf, or { val:0, ls:[...] } if a nonleaf.
*/

/* Create an iterator function for the seed.
   The iterator can be called repeatedly. It returns a number, or true when
   the iterator is out of seed values.
*/
function create_seed_iterator(seed)
{
    var count = 0;
    var pushed = null;

    return function() {
        while (true) {
            if (!seed)
                return true;
            if (seed.val === null && seed.ls === null)
                return true;

            var seedcount = 1;            
            if (seed.ls !== null)
                seedcount = seed.ls.length;

            if (count >= seedcount) {
                if (!pushed) {
                    seed = null;
                    count = 0;
                    pushed = null;
                }
                else {
                    seed = pushed.seed;
                    count = pushed.count;
                    pushed = pushed.pushed;
                }
                continue;
            }

            if (seed.ls === null) {  // is a leaf
                count++;
                return seed.val;
            }

            var el = seed.ls[count];
            count++;
            if (el.ls === null) {  // is a leaf
                return el.val;
            }

            pushed = { seed:seed, count:count, pushed:pushed };
            seed = el;
            count = 0;
            // continue...
        }
    };
}

function Builder(rootnode) {
    function build(node) {
        if (!node) {
            return function(resarray, seed) { };
        }
        if (typeof(node) == 'string') {
            return function(resarray, seed) {
                resarray.push(node);
            };
        }
        if (node === SpecialNode.Period || node === SpecialNode.Comma 
            || node === SpecialNode.Dash || node === SpecialNode.Hyphen 
            || node === SpecialNode.Semicolon 
            || node === SpecialNode.AAn 
            || node === SpecialNode.AForm || node === SpecialNode.AnForm 
            || node === SpecialNode.Concat) {
            return function(resarray, seed) {
                resarray.push(node);
            };
        }
        
        return node(build);
    }

    return build(rootnode);
}

function Randomizer(seedval) {
    var z = 362436069 + seedval;
    var w = 521288629 - seedval;
    var counter = 0;

    return function(mod) {
	counter++;
	var count = (mod & 3) + 1;
	mod = mod >> 2;
	while (count) {
            z = (36969 * (z & 65535) + (z >> 16) + mod) & 0xFFFFFFFF;
            w = (18000 * (w & 65535) + (w >> 16)) & 0xFFFFFFFF;
            count--;
            mod = 0;
	}
	var val = (((z & 0xFFFF) << 16) + (w & 0xFFFF));
        return (val >>> 0); // unsigned integer
    }
}

function Context() {
    var seediter = null;
    var randomizer = null;

    var shuffle = {};
    var map = {};

    function setseed(seed) {
        seediter = create_seed_iterator(seed);
        randomizer = Randomizer(seediter());
    }

    function randomuniform(max) {
        var mod = seediter();
        if (mod === true)
            mod = 0;
        else
            mod++;

        var val = randomizer(mod);
        return (max * (val & 0xFFFFFF) / 16777216.0);
    }

    function randomchance(chance) {
        var mod = seediter();
        if (mod === true)
            mod = 0;
        else
            mod++;

        var val = randomizer(mod);

        return (((val % 102077) / 102077.0) < chance);
    }

    function randomrange(range) {
        var mod = seediter();
        if (mod === true)
            mod = 0;
        else
            mod++;

        var val = randomizer(mod);

	if (range == 2 || range == 4 || range == 8 || range == 16 || range == 32 || range == 64) {
            var res = (val % (range+1));
            if (res < range)
                return res;
        }

        return (val % range);
    };

    return {
        setseed: setseed,
        shuffle: shuffle,
        map: map,
        randomuniform: randomuniform,
        randomchance: randomchance,
        randomrange: randomrange
    }
}

function Factory(node, endperiod) {
    /* Generate a builder for use with this factory. */
    var bfunc = Builder(node);

    /* Default to ending the line with a period. */
    if (endperiod === undefined)
        endperiod = true;

    /* Some constants, used when stringing together words. */
    var Mode_Beginning = 0;
    var Mode_NewSentence = 1;
    var Mode_Interword = 2;
    var Mode_Hyphen = 3;
    var Mode_Comma = 4;
    var Mode_Semicolon = 5;
    var Mode_Dash = 6;
    var Mode_AAn = 7;
    var Mode_Concat = 8;

    /* Regex to test whether a string starts with a vowel. */
    var regex_startvowel = /^[aeiou]/i;

    /* Build and return the factory function. */
    return function(ctx) {
        /* Call the nested generators, filling in the work array. */
        var resarray = [];
        try {
            bfunc(resarray, ctx);
        } 
        catch (ex) {
            resarray.push('ERROR: ' + ex);
        }

        /* Now we have to go down the work array and account for
         capitalization, spaces, "a/an" distinctions, etc. We do
         this in a second work array. */

        var outarray = [];
        var mode = Mode_Beginning;
        
        for (var ix=0; ix<resarray.length; ix++) {
            var val = resarray[ix];
            if (!val)
                continue;

            var nextmode = Mode_Interword;

            if (val === SpecialNode.Period) {
                mode = Mode_NewSentence;
                continue;
            }
            if (val === SpecialNode.Hyphen) {
                if (mode == Mode_Interword)
                    mode = Mode_Hyphen;
                continue;
            }
            if (val === SpecialNode.Comma) {
                if (mode == Mode_Interword || mode == Mode_Hyphen)
                    mode = Mode_Comma;
                continue;
            }
            if (val === SpecialNode.Dash) {
                if (mode == Mode_Interword || mode == Mode_Hyphen || mode == Mode_Comma)
                    mode = Mode_Dash;
                continue;
            }
            if (val === SpecialNode.Semicolon) {
                if (mode == Mode_Interword || mode == Mode_Hyphen || mode == Mode_Comma || mode == Mode_Dash)
                    mode = Mode_Semicolon;
                continue;
            }
            if (val === SpecialNode.Concat) {
                mode = Mode_Concat;
                continue;
            }
            if (val === SpecialNode.AForm) {
                mode = Mode_Interword;
                continue;
            }
            if (val === SpecialNode.AnForm) {
                if (mode == Mode_AAn)
                    outarray.push("n");
                mode = Mode_Interword;
                continue;
            }
            if (val === SpecialNode.AAn) {
                val = "a";
                nextmode = Mode_AAn;
            }

            if (mode == Mode_Beginning || mode == Mode_NewSentence) {
                val = val.substr(0, 1).toUpperCase() + val.substr(1);
            }

            switch (mode) {
            case Mode_Concat:
                break;
            case Mode_Interword:
                outarray.push(" ");
                break;
            case Mode_Comma:
                outarray.push(", ");
                break;
            case Mode_Semicolon:
                outarray.push("; ");
                break;
            case Mode_Hyphen:
                outarray.push("-");
                break;
            case Mode_Dash:
                outarray.push(" -- ");
                break;
            case Mode_AAn:
                if (regex_startvowel.test(val))
                    outarray.push("n");
                outarray.push(" ");
                break;
            case Mode_NewSentence:
                outarray.push(". ");
                break;
            }

            outarray.push(val);
            mode = nextmode;
        }
        
        /* Add a period if needed. */
        if (endperiod) {
            if (!(mode == Mode_Beginning || mode == Mode_NewSentence)) {
                outarray.push(".");
            }
        }

        /* The outarray is a simple array of strings to be joined
           together. */
        return outarray.join("");
    }
}
