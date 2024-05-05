/* My Secret Hideout (a.k.a. the Treehouse app)
   (release 2, Feb 16 2017)
   Written by Andrew Plotkin
   Copyright 2011-17 by Zarfhome Software Consulting, LLC
*/

var origin = { x:0, y:0, z:0 };
var scale = 1;
var sourcepos = { x:0, y:0, z:0 };
var sourceposwidth = 0;

var factory = null;

var visibletree = null;
var currenttree = null;
var undo_chain = [];
var redo_chain = [];
var display_about = false;

var dragtree = null;
var dragcontext = null;
var everhadtext = false;

var LeafShapes = 6;
var LeafRad = 20;
var MaxBranchLength = 30;
var MaxConnectDistance = MaxBranchLength + 2*LeafRad;
var MinConnectDistance = 40;
var TWOPI = 2 * Math.PI;

var BranchColor = '#8C9959';

var PaletteColor = { color:'#7F7266', negcolor:'#E5E5B2' };
var SketchColor = { color:'#664C33', negcolor:'#FFF' };
var ColorTable = [
    { color:'#667F00', negcolor:'#CCCCB2' },
    { color:'#33B200', negcolor:'#CCE5B2' },
    { color:'#336666', negcolor:'#BFD8D8' },
    { color:'#666633', negcolor:'#D8CCA5' },
    { color:'#00B233', negcolor:'#CCE5B2' },
    { color:'#007F66', negcolor:'#BFE5CC' }
];

function update_tree(tree)
{
    if (currenttree)
        undo_chain.push(currenttree);
    redo_chain = [];

    compute_branching(tree);
    compute_seed(tree);
    currenttree = tree;
    visibletree = currenttree;
    display_about = false;

    adjust_buttons();
    adjust_text();
}

function adjust_buttons()
{
    $('#undo_button').attr('disabled', (undo_chain.length == 0));
    $('#redo_button').attr('disabled', (redo_chain.length == 0));

    var is_fresh = (currenttree && currenttree.shape == 0 && (!(currenttree.children && currenttree.children.length)));
    $('#new_button').attr('disabled', is_fresh);
}

function adjust_text()
{
    var seed = currenttree.compseed;

    var textcol = $('.Text');
    textcol.empty();

    if (display_about) {
        textcol.append(about_html);
        $('#aboutdone_button').on('click', evhan_button_about);
        $('.Blurb').hide();
    }
    else if (seed.val === null && seed.ls === null) {
        var parel = $('<p>').text('My secret hideout is a treehouse.');
        textcol.append(parel);
        $('.Blurb').show();
    }
    else {
        var parel;
        //textcol.append($('<p>').text('### ' + dump_seed(seed)));

        if (!factory)
            factory = Factory(construct_root_node());
        var ctx = Context();

        var seeds;
        if (!seed.ls)
            seeds = [ seed ];
        else
            seeds = seed.ls;
        for (var subseed of seeds) {
            ctx.setseed(subseed);
            var text = factory(ctx);
            var ls = text.split('\n');
            for (var val of ls) {
                parel = $('<p>').text(val);
                textcol.append(parel);
            }
        }

        $('.Blurb').hide();
        everhadtext = true;
    }
}

var about_html = '\
<h2>My Secret Hideout</h2>\
<h2>Interactive Art by Andrew Plotkin</h2>\
<p>\
Drag a leaf from the top, and drop it down next to the root of the tree. (Not right on top of it!) It will stick. There &#x2014; your tree has grown a new branch.\
</p>\
<p>\
Now look at the text on the left. It doesn&#x2019;t say what it said before. Try adding another leaf, or moving one of the leaves around. Every change you make causes new possibilities to unfold. As your tree grows larger, new rooms may appear in the treehouse.\
</p>\
<hr>\
<p>\
<em>My Secret Hideout</em> was my first iOS app. I released it in 2011, while working on <a target="_" href="http://hadeanlands.com/">Hadean Lands</a>. I figured that <em>HL</em> might take a while (yep!) and that I should have a steady stream of side projects to bring in money and keep my name visible.\
</p>\
<p>\
<em>My Secret Hideout</em> was a quirky experiment &#x2014; a procedural-generation software toy. (2011 was before the Great Bot Era; procedural text generation was still an obscure IF gimmick.) I wanted it to be fun to read, and fun in a finger-twiddling sense as well. People enjoyed it, but not, in the end, very many people. It&#x2019;s sold something like 700 copies over five years.\
</p>\
<p>\
In January of 2017, Apple sent me a notice that I should update the app, please, or they would drop it from the App Store. Updating it would have been a lot of work. The last time I touched the code, iOS 5 was brand-new and iPhones came in exactly one size! So I decided to rewrite <em>Hideout</em> in Javascript and post it here.\
</p>\
<p>\
Rewriting it was less work than it sounds &#x2014; less work than updating the iOS version would have been, really. The text generation engine was based on <a target="_" href="http://eblong.com/zarf/mutagen/">Mutagen</a>, which I&#x2019;ve adapted for all sorts of projects. (It&#x2019;s similar in concept to <a target="_" href="http://tracery.io/">Tracery</a>, although not as easy to use.) Porting the tree display code from ObjC to Javascript took just a few days. The version I have here isn&#x2019;t as polished as the iOS app, but it gets the job done.\
</p>\
<p>\
The big loss is iOS&#x2019;s VoiceOver support. The old app was quite usable by sight-impaired users. I suspect the Javascript version isn&#x2019;t.\
</p>\
<p>\
I&#x2019;ve also dropped the notion of saving or exporting trees. Sorry. You can just copy the text from the text pane.\
</p>\
<p style="text-align: right;">\
<button id="aboutdone_button">Okay</button>\
</p>\
';

function redraw()
{
    var canvasel = $('#canvas');
    var canvas = canvasel.get(0);
    var ctx = canvas.getContext('2d');

    ctx.save();
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#CDC';
    ctx.fillRect(0, 0, canvas.width, 3*LeafRad*scale);

    for (var ix=0; ix<LeafShapes; ix++) {
        draw_leaf(ctx, ix, { x:sourcepos.x+ix*sourceposwidth, y:sourcepos.y });
    }

    if (visibletree) {
        draw_foliage(ctx, visibletree);
        draw_root_branch(ctx, visibletree.pos);
        draw_tree(ctx, visibletree, { x:0, y:0 });
    }

    if (dragtree) {
        ctx.save();
        ctx.globalAlpha = 0.5;
        draw_tree(ctx, dragtree, dragcontext.pos, -1);
        ctx.restore();

        if (dragcontext.state == 'near') 
            draw_dotted_branch(ctx, dragcontext.pos, dragcontext.node.pos);
        else if (dragcontext.state == 'over') 
            draw_dotted_branch(ctx, dragcontext.node.pos);
    }

    ctx.restore();
}

function draw_foliage(ctx, tree)
{
    ctx.save();
    ctx.beginPath();
    iterate_tree(tree, function(nod) {
        var cpos = maploc(nod.pos.x, nod.pos.y);
        var rad = 0.1 + 0.2*nod.depth + (nod.children ? 0.4*nod.children.length : 0);
        ctx.arc(cpos.x, cpos.y, 2*LeafRad*rad*scale, 0, TWOPI);
        ctx.closePath();
    });
    ctx.fillStyle = '#AFA';
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    iterate_tree(tree, function(nod) {
        var cpos = maploc(nod.pos.x, nod.pos.y);
        var rad = 0.1 + 0.2*nod.depth + (nod.children ? 0.4*nod.children.length : 0);
        var val = 2*LeafRad*rad*scale;
        ctx.moveTo(cpos.x, cpos.y-0.7*val);
        ctx.quadraticCurveTo(cpos.x+1.6*val, cpos.y, cpos.x, cpos.y+0.7*val);
        ctx.quadraticCurveTo(cpos.x-1.6*val, cpos.y, cpos.x, cpos.y-0.7*val);
        ctx.closePath();
    });
    ctx.fillStyle = '#88F488';
    ctx.fill();
    ctx.restore();
}

function draw_tree(ctx, tree, basepos, colornum)
{
    var branchfunc = function(nod, parent, parentpos) {
        var pos = { x:basepos.x+nod.pos.x, y:basepos.y+nod.pos.y };
        if (nod.smeardest) {
            pos.x += nod.smeardest.x;
            pos.y += nod.smeardest.y;
        }

        if (parent) {
            var width = 0.5;
            if (nod.branchid === undefined)
                width = 0.4;
            else if (nod.branchid == 0 && nod.parent.branchid == 0)
                width = 0.6;
            draw_branch(ctx, pos, parentpos, width);
        }
        if (nod.children && nod.children.length) {
            for (var subnod of nod.children) {
                branchfunc(subnod, nod, pos);
            }
        }
    }

    var leaffunc = function(nod) {
        var pos = { x:basepos.x+nod.pos.x, y:basepos.y+nod.pos.y };
        if (nod.smeardest) {
            pos.x += nod.smeardest.x;
            pos.y += nod.smeardest.y;
        }

        var branchid = colornum;
        if (branchid === undefined)
            branchid = nod.branchid;
        draw_leaf(ctx, nod.shape, pos, branchid);
        if (nod.children && nod.children.length) {
            for (var subnod of nod.children) {
                leaffunc(subnod);
            }
        }
    };

    branchfunc(tree, null, null);
    leaffunc(tree);
}

function draw_leaf(ctx, shape, pos, branchid)
{
    var cpos = maploc(pos.x, pos.y);
    var rad = LeafRad * scale;

    var colorent;
    if (branchid === undefined) {
        colorent = PaletteColor;
    }
    else if (branchid < 0) {
        colorent = SketchColor;
    }
    else {
        colorent = ColorTable[branchid % 6];
    }

    switch (shape) {

    case 0:
        ctx.beginPath();
        ctx.arc(cpos.x, cpos.y, rad, 0, TWOPI);
        ctx.closePath();
        break;

    case 1:
        ctx.beginPath();
        ctx.moveTo(cpos.x, cpos.y-0.9*rad);
        ctx.lineTo(cpos.x+0.7*rad, cpos.y-0.5*rad);
        ctx.quadraticCurveTo(cpos.x+1.3*rad, cpos.y, cpos.x+0.5*rad, cpos.y+0.5*rad);
        ctx.lineTo(cpos.x, cpos.y+0.9*rad);
        ctx.lineTo(cpos.x-0.7*rad, cpos.y+0.5*rad);
        ctx.quadraticCurveTo(cpos.x-1.3*rad, cpos.y, cpos.x-0.5*rad, cpos.y-0.5*rad);
        ctx.closePath();
        break;

    case 2:
        ctx.beginPath();
        ctx.moveTo(cpos.x-0.9*rad, cpos.y-0.75*rad);
        ctx.quadraticCurveTo(cpos.x, cpos.y-0.9*rad, cpos.x+0.9*rad, cpos.y-0.75*rad);
        ctx.quadraticCurveTo(cpos.x+0.35*rad, cpos.y, cpos.x+0.9*rad, cpos.y+0.75*rad);
        ctx.quadraticCurveTo(cpos.x, cpos.y+0.9*rad, cpos.x-0.9*rad, cpos.y+0.75*rad);
        ctx.quadraticCurveTo(cpos.x-0.35*rad, cpos.y, cpos.x-0.9*rad, cpos.y-0.75*rad);
        ctx.closePath();
        break;

    case 3:
        ctx.beginPath();
        ctx.moveTo(cpos.x, cpos.y-rad);
        ctx.bezierCurveTo(cpos.x+0.75*rad, cpos.y-rad, cpos.x+0.7*rad, cpos.y, cpos.x+rad, cpos.y);
        ctx.bezierCurveTo(cpos.x+rad, cpos.y+0.75*rad, cpos.x, cpos.y+0.7*rad, cpos.x, cpos.y+rad);
        ctx.bezierCurveTo(cpos.x-0.75*rad, cpos.y+rad, cpos.x-0.7*rad, cpos.y, cpos.x-rad, cpos.y);
        ctx.bezierCurveTo(cpos.x-rad, cpos.y-0.75*rad, cpos.x, cpos.y-0.7*rad, cpos.x, cpos.y-rad);
        ctx.closePath();
        break;

    case 4:
        ctx.beginPath();
        ctx.moveTo(cpos.x-1*rad, cpos.y-0.2*rad);
        ctx.bezierCurveTo(cpos.x-0.7*rad, cpos.y+1.2*rad, cpos.x+0.7*rad, cpos.y+1.2*rad, cpos.x+0.7*rad, cpos.y-0.1*rad);
        ctx.lineTo(cpos.x+1*rad, cpos.y+0.2*rad);
        ctx.bezierCurveTo(cpos.x+0.7*rad, cpos.y-1.2*rad, cpos.x-0.7*rad, cpos.y-1.2*rad, cpos.x-0.7*rad, cpos.y+0.1*rad);
        ctx.closePath();
        break;

    case 5:
        ctx.beginPath();
        ctx.moveTo(cpos.x-0.75*rad, cpos.y-0.5*rad);
        ctx.bezierCurveTo(cpos.x-0.75*rad, cpos.y-1.2*rad, cpos.x+0.75*rad, cpos.y-1.2*rad, cpos.x+0.75*rad, cpos.y-0.5*rad);
        ctx.lineTo(cpos.x+0.75*rad, cpos.y+0.5*rad);
        ctx.bezierCurveTo(cpos.x+0.75*rad, cpos.y+1.2*rad, cpos.x-0.75*rad, cpos.y+1.2*rad, cpos.x-0.75*rad, cpos.y+0.5*rad);
        ctx.closePath();
        break;

    default:
        ctx.beginPath();
        ctx.arc(cpos.x, cpos.y, rad, 0, TWOPI);
        ctx.closePath();
        break;
    }

    ctx.fillStyle = colorent.color; 
    ctx.fill();

    switch (shape) {

    case 0:
        ctx.beginPath();
        ctx.arc(cpos.x, cpos.y, 0.6*rad, 0, TWOPI);
        ctx.closePath();
        ctx.strokeStyle = colorent.negcolor;
        ctx.lineWidth = 0.2*rad;
        ctx.stroke();
        break;

    case 5:
        ctx.beginPath();
        ctx.moveTo(cpos.x, cpos.y-0.3*rad);
        ctx.lineTo(cpos.x, cpos.y+0.3*rad);
        ctx.strokeStyle = colorent.negcolor;
        ctx.lineWidth = 0.3*rad;
        ctx.stroke();
        break;

    }
}

function draw_root_branch(ctx, pos)
{
    var cpos = maploc(pos.x, pos.y);

    ctx.beginPath();

    ctx.moveTo(cpos.x-0.25*LeafRad*scale, cpos.y);
    ctx.lineTo(cpos.x-0.6*LeafRad*scale, cpos.y+2*LeafRad*scale);
    ctx.lineTo(cpos.x+0.6*LeafRad*scale, cpos.y+2*LeafRad*scale);
    ctx.lineTo(cpos.x+0.25*LeafRad*scale, cpos.y);

    ctx.closePath();

    ctx.fillStyle = BranchColor;
    ctx.fill();
}

function draw_branch(ctx, pos1, pos2, width)
{
    var cpos1 = maploc(pos1.x, pos1.y);
    var cpos2 = maploc(pos2.x, pos2.y);

    ctx.beginPath();
    ctx.moveTo(cpos1.x, cpos1.y);
    ctx.lineTo(cpos2.x, cpos2.y);
    ctx.lineWidth = width * LeafRad * scale;
    ctx.strokeStyle = BranchColor;
    ctx.stroke();
}

function draw_dotted_branch(ctx, pos1, pos2)
{
    var cpos1 = maploc(pos1.x, pos1.y);

    ctx.save();

    ctx.lineWidth = 4*scale;
    ctx.strokeStyle = '#000';
    ctx.setLineDash([4*scale, 4.3*scale]);

    ctx.beginPath();
    ctx.arc(cpos1.x, cpos1.y, 1.2*scale*LeafRad, 0, TWOPI);
    ctx.closePath();
    ctx.stroke();

    if (pos2) {
        var cpos2 = maploc(pos2.x, pos2.y);

        ctx.beginPath();
        ctx.moveTo(cpos2.x, cpos2.y);
        ctx.lineTo(cpos1.x, cpos1.y);
        ctx.stroke();
    }

    ctx.restore();
}

function unsmear()
{
    iterate_tree(visibletree, function(nod) {
        nod.smeardest = null;
    });
}

function smear_around_position(pos, exclude)
{
    iterate_tree(visibletree, function(nod) {
        if (nod === exclude) {
            nod.smeardest = null;
        }
        else {
            var dist = distance(pos, nod.pos) * 0.0125;
            if (dist < Math.PI) {
                var factor = Math.sin(dist) * 2.5 * nod.depth;
                var diff = unitvector_between_points(pos, nod.pos);
                nod.smeardest = { x:factor*diff.x, y:factor*diff.y };
            }
            else {
                nod.smeardest = null;
            }
        }
    });
}

function maploc(xval, yval)
{
    return { x:(xval*scale+origin.x), y:(yval*scale+origin.y) };
}

function unmaploc(xval, yval, offset)
{
    xval -= offset.left;
    yval -= offset.top;
    return { x:(xval-origin.x)/scale, y:(yval-origin.y)/scale };
}

function event_pos(ev, istouch)
{
    if (!istouch)
        return { x:ev.clientX, y:ev.clientY };
    else
        return { x:ev.originalEvent.pageX, y:ev.originalEvent.pageY };
}

function evhan_dragstart(ev)
{
    ev.preventDefault(); 
    ev.stopPropagation();

    var istouch = ev.data.istouch;

    var offset = $('#canvas').offset();
    var pos = event_pos(ev, istouch);
    pos = unmaploc(pos.x, pos.y, offset);

    dragcontext = null;
    dragtree = null;

    var closest = find_closest_node(currenttree, pos);
    if (closest.node !== null && closest.distance <= LeafRad) {
        if (closest.node === currenttree) {
            // root, ignore
        }
        else {
            var subtree = clone_tree(closest.node);
            var shiftpos = subtree.pos;
            iterate_tree(subtree, function(nod) {
                    nod.pos = { x:nod.pos.x-shiftpos.x, y:nod.pos.y-shiftpos.y };
            });

            var res = clone_tree_tracking(currenttree, closest.node);
            var childls = res.track.parent.children;
            res.track.parent.children = childls.filter(function(nx) { return (nx !== res.track); });

            compute_branching(res.tree);
            visibletree = res.tree;

            dragcontext = { state:null, pos:pos, istouch:istouch };
            dragtree = subtree;
        }
    }
    else {
        var shape = -1;

        for (var ix=0; ix<LeafShapes; ix++) {
            var leafpos = { x:sourcepos.x+ix*sourceposwidth, y:sourcepos.y };
            if (distance(pos, leafpos) < LeafRad) {
                shape = ix;
                break;
            }
        }
        
        if (shape >= 0) {
            dragcontext = { state:null, pos:pos, istouch:istouch };
            dragtree = { shape:shape, pos:{ x:0, y:0 } };
        }
    }

    if (!(dragcontext && dragtree)) {
        unsmear();
        return;
    }

    smear_around_position(pos, null);
    redraw();

    if (!istouch) {
        $('body').on('mousemove', evhan_dragdrag);
        $('body').on('mouseup', evhan_dragstop);
    }
    else {
        $('body').on('touchmove', evhan_dragdrag);
        $('body').on('touchend', evhan_dragstop);
        $('body').on('touchcancel', evhan_dragstop);
    }

    $('.Hint').hide();
}

function evhan_dragdrag(ev)
{
    if (!dragtree || !dragcontext)
        return;

    var offset = $('#canvas').offset();
    var pos = event_pos(ev, dragcontext.istouch);
    pos = unmaploc(pos.x, pos.y, offset);
    pos = apply_repulsion(visibletree, pos);
    dragcontext.pos = pos;

    var closest = find_closest_node(visibletree, pos);
    if (closest.node === null || closest.distance >= MaxConnectDistance) {
        dragcontext.state = null;
        unsmear();
    }
    else if (closest.distance >= MinConnectDistance) {
        dragcontext.state = 'near';
        dragcontext.node = closest.node;
        smear_around_position(pos, closest.node);
    }
    else {
        dragcontext.state = 'over';
        dragcontext.node = closest.node;
        smear_around_position(pos, closest.node);
    }

    redraw();
}

function evhan_dragstop(ev)
{
    if (dragcontext && dragtree) {
        if (dragcontext.state == 'near') {
            var newtree = tree_by_adding_tree(visibletree, dragtree, dragcontext.pos);
            update_tree(newtree);
        }
        else if (dragcontext.state == 'over') {
            var newtree = tree_by_adding_tree(visibletree, dragtree, dragcontext.node.pos, dragcontext.node);
            update_tree(newtree);
        }
        if (currenttree !== visibletree) {
            update_tree(visibletree);
        }
    }

    $('body').off('mousemove');
    $('body').off('mouseup');
    $('body').off('touchmove');
    $('body').off('touchend');
    $('body').off('touchcancel');

    dragtree = null;
    dragcontext = null;
    redraw();

    if (!everhadtext)
        $('.Hint').show();
}

function evhan_button_new()
{
    var newtree = { shape:0, pos:{ x:0, y:-2*LeafRad } };
    update_tree(newtree);
    unsmear();

    redraw();
}

function evhan_button_undo()
{
    if (!undo_chain.length)
        return;

    var newtree = undo_chain.pop();
    redo_chain.push(currenttree);
    currenttree = newtree;
    visibletree = currenttree;
    unsmear();

    display_about = false;

    adjust_buttons();
    adjust_text();
    redraw();
}

function evhan_button_redo()
{
    if (!redo_chain.length)
        return;

    var newtree = redo_chain.pop();
    undo_chain.push(currenttree);
    currenttree = newtree;
    visibletree = currenttree;
    unsmear();

    display_about = false;

    adjust_buttons();
    adjust_text();
    redraw();
}

function evhan_button_about()
{
    display_about = !display_about;
    adjust_text();
}

function evhan_resize()
{
    var canvasel = $('#canvas');
    var canvas = canvasel.get(0);

    var width = canvasel.width();
    var height = canvasel.height();

    canvas.width = width;
    canvas.height = height;

    scale = width / 500;
    origin = { x:0.5*width, y:height };

    sourceposwidth = 3 * LeafRad;
    sourcepos = { y:(-height / scale) + 1.5*LeafRad, x:-0.5 * ((LeafShapes - 1) * sourceposwidth) };

    redraw();
}

function distance(pos1, pos2)
{
    return Math.hypot(pos2.x-pos1.x, pos2.y-pos1.y);
}

function unitvector_between_points(pos1, pos2)
{
    var resx = pos2.x-pos1.x;
    var resy = pos2.y-pos1.y;
    var dist = Math.hypot(resx, resy);
    if (dist <= 0)
        return { x:0, y:0 };
    return { x:resx/dist, y:resy/dist };
}

function angle_between_points(pos1, pos2)
{
    var dx = pos2.x - pos1.x;
    var dy = pos2.y - pos1.y;
    return Math.atan2(dx, dy); // make zero vertically up
}

function apply_repulsion(tree, pos)
{
    if (!(tree && tree.nodelist))
        return pos;

    var closeoff = null;

    var closecount = 0;
    var farcount = 0;
    var nearest = null;
    var nearestdist = null;

    for (var nod of tree.nodelist) {
        var dist = distance(nod.pos, pos);
        if (nearest === null || dist < nearestdist) {
            nearestdist = dist;
            nearest = nod;
        }
        var vecx = pos.x - nod.pos.x;
        var vecy = pos.y - nod.pos.y;
        if (dist > 0.5*LeafRad && dist < 3*LeafRad) {
            if (!closecount) {
                var val = 1.92*LeafRad + 0.36*dist;
                val = ((val - dist) / dist);
                closeoff = { x:val*vecx, y:val*vecy };                
            }
            closecount++;
        }
    }

    if (nearest && nearestdist > MaxBranchLength+1.5*LeafRad && nearestdist < MaxBranchLength+3.0*LeafRad) {
        var dist = nearestdist;
        var vecx = pos.x - nearest.pos.x;
        var vecy = pos.y - nearest.pos.y;
        farcount = 1;

        var ratio = (dist - (MaxBranchLength+1.5*LeafRad)) / (1.5*LeafRad);
        var val = MaxBranchLength+1.5*LeafRad + 0.5*ratio*LeafRad;
        val = ((val - dist) / dist);
        faroff = { x:val*vecx, y:val*vecy };
    }

    if (closecount != 1 && farcount != 1)
        return pos;

    if (closecount == 1) {
        pos.x += closeoff.x;
        pos.y += closeoff.y;
    }
    if (farcount == 1) {
        pos.x += faroff.x;
        pos.y += faroff.y;
    }
    return pos;
}

function find_closest_node(tree, pos)
{
    var context = { node:null, distance:null };
    if (!tree)
        return context;

    iterate_tree(tree, function(nod) {
        var dist = distance(nod.pos, pos);
        if (context.node === null || dist < context.distance) {
            context.node = nod;
            context.distance = dist;
        }
    });

    return context;
}

function iterate_tree(tree, nodefunc, rootarg)
{
    var func = function(nod, nodarg) {
        var subarg = nodefunc(nod, nodarg);

        if (nod.children && nod.children.length) {
            for (var subnod of nod.children) {
                func(subnod, subarg);
            }
        }
    };

    func(tree, rootarg);
}

function clone_tree_tracking(tree, tracknod)
{
    var newtracknod = null;

    var func = function(nod) {
        var res = { shape:nod.shape, pos:nod.pos, parent:null };
        if (nod === tracknod)
            newtracknod = res;
        
        if (nod.children && nod.children.length) {
            res.children = [];
            for (var subnod of nod.children) {
                var subres = func(subnod);
                res.children.push(subres);
                subres.parent = res;
            }
        }

        return res;
    }

    var newtree = func(tree);
    return { tree:newtree, track:newtracknod };
}

function clone_tree(tree)
{
    var res = clone_tree_tracking(tree);
    return res.tree;
}

function tree_by_adding_tree(tree, tree2, basepos, replace)
{
    var res = clone_tree_tracking(tree, replace);
    var restree = res.tree;

    var func = function(nod) {
        var pos = { x:basepos.x+nod.pos.x, y:basepos.y+nod.pos.y };
        var closest = find_closest_node(restree, pos);

        if (closest.node !== null) {
            if (closest.distance < MaxConnectDistance && closest.distance >= MinConnectDistance) {
                var resnod = { shape:nod.shape, pos:pos };
                resnod.parent = closest.node;
                if (!closest.node.children)
                    closest.node.children = [];
                closest.node.children.push(resnod);
            }
        }

        if (nod.children && nod.children.length) {
            for (var subnod of nod.children) {
                func(subnod);
            }
        }
    }

    if (!replace) {
        func(tree2);
    }
    else {
        res.track.shape = tree2.shape;
        if (tree2.children && tree2.children.length) {
            for (var subnod of tree2.children) {
                func(subnod);
            }
        }
    }

    return restree;
}

var branchtype_None = 0;
var branchtype_Twig = 1;
var branchtype_Branch = 2;

function compute_branching(tree)
{
    var nodelist = [];

    var func1 = function(nod, parent) {
        nod.listindex = nodelist.length;
        nodelist.push(nod);
        if (!parent) {
            nod.depth = 0;
            nod.parenttheta = 0;
        }
        else {
            nod.depth = parent.depth+1;
        }
        nod.branchtype = branchtype_None;
        nod.branchlength = 0;
        nod.branchid = -1;

        if (nod.children && nod.children.length) {
            for (var subnod of nod.children) {
                subnod.parenttheta = angle_between_points(nod.pos, subnod.pos);
            }
            nod.children.sort(function(v1, v2) { return v1.parenttheta - v2.parenttheta; });
            for (var subnod of nod.children) {
                func1(subnod, nod);
            }
        }
    };

    func1(tree);
    tree.nodelist = nodelist;

    var curbranchid = 0;

    var assign_branch_func = function(nod, branchid) {
        if (nod.branchtype == branchtype_Branch)
            return;
        nod.branchtype = branchtype_Branch;
        nod.branchid = branchid;
        if (nod.children && nod.children.length) {
            for (var subnod of nod.children) {
                assign_branch_func(subnod, branchid);
            }
        }
    }

    for (var ix=nodelist.length-1; ix >= 0; ix--) {
        var nod = nodelist[ix];

        if (!(nod.children && nod.children.length)) {
            nod.branchtype = branchtype_Twig;
            nod.branchlength = 1;
            continue;
        }

        var subbranchcount = 0;
        var longestsubbranch = null;
        var lengthsubbranch = -1;
        var lengthsubtwig = -1;
        for (var subnod of nod.children) {
            if (subnod.branchtype == branchtype_Branch) {
                subbranchcount++;
                if (subnod.branchlength > lengthsubbranch) {
                    longestsubbranch = subnod;
                    lengthsubbranch = subnod.branchlength;
                }
            }
            else {
                if (subnod.branchlength > lengthsubtwig) {
                    lengthsubtwig = subnod.branchlength;
                }
            }
        }

        if (!subbranchcount) {
            nod.branchlength = lengthsubtwig+1;
            if (nod.branchlength >= 2) {  // MIN_BRANCH_LENGTH is 2
                assign_branch_func(nod, curbranchid);
                curbranchid++;
            }
            else {
                nod.branchtype = branchtype_Twig;
            }
        }
        else {
            nod.branchlength = lengthsubbranch+1;
            assign_branch_func(nod, longestsubbranch.branchid);
        }
    }

    if (tree.branchtype != branchtype_Branch) {
        assign_branch_func(tree, curbranchid);
        curbranchid++;
    }

    var rootid = tree.branchid;
    for (var nod of nodelist) {
        var val = nod.branchid;
        if (val == 0)
            nod.branchid = rootid;
        else if (val == rootid)
            nod.branchid = 0;
    }

    tree.branchcount = curbranchid;
}

function compute_seed(tree)
{
    if (tree.nodelist.length <= 1) {
        tree.compseed = { val:null, ls:null };
        return;
    }
    
    var roomcount = tree.branchcount;
    if (roomcount > 6)
        roomcount = 6;

    var branches = [];
    for (var ix=0; ix<roomcount; ix++)
        branches.push([]);

    for (var nod of tree.nodelist) {
        var val1 = (nod.shape + 1);
        var val2 = 0;
        if (nod.parent) {
            var vx = nod.parent.pos.x - nod.pos.x;
            var vy = nod.parent.pos.y - nod.pos.y;
            var dist = Math.hypot(vx, vy);
            var theta = Math.atan2(vy, vx);
            val2 += Math.floor(0.3 * dist);
            val2 += Math.floor(10 * theta / Math.PI);
        }

        var branch = branches[nod.branchid % roomcount];
        branch.push({ val:val1, ls:null });
        branch.push({ val:val2, ls:null });
    }

    for (var ix=0; ix<roomcount; ix++) {
        branches[ix] = { val:0, ls:branches[ix] };
    }

    tree.compseed = { val:0, ls:branches };
}

function dump_seed(seed)
{
    var arr = [];
    
    var func = function(seed) {
        if (seed.val === null && seed.ls === null) {
            arr.push('{}');
            return;
        }
        if (seed.ls === null) {
            arr.push(''+seed.val);
            return;
        }

        var first = true;
        arr.push('[');
        for (var val of seed.ls) {
            if (!first)
                arr.push(', ');
            first = false;
            func(val);
        }
        arr.push(']');
    };

    func(seed);

    return arr.join('');
}

$(document).ready(function() {
    var has_touch_event = ('ontouchstart' in window);

    $('.Hint').show();

    $('#new_button').on('click', evhan_button_new);
    $('#undo_button').on('click', evhan_button_undo);
    $('#redo_button').on('click', evhan_button_redo);
    $('#about_button').on('click', evhan_button_about);

    var canvasel = $('#canvas');
    canvasel.on('mousedown', { istouch:false }, evhan_dragstart);
    canvasel.on('touchstart', { istouch:true }, evhan_dragstart);

    $(window).on('resize', evhan_resize);
    evhan_resize();

    evhan_button_new();
});
