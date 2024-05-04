/* Generated source file -- copyright 2011-17 by Zarfhome Software Consulting, LLC */

function construct_root_node(/*.₦-.∀.*/) {

var SetRoomRelation = SetKeyNode("relation", "room");

var SetAttrRelation = SetKeyNode("relation", "attr");

var SetTerrain = SetOnceKeyNode("terrain", null, "river", "volcano", "savannah", "tundra", "mountain", "swamp", "hill");

var SetStyle = SetOnceKeyNode("style", null, "woven", "rough", "precise", "carved");

var TinyObservatoryAdj = ShuffleNode("shuffle_37", "compact", "small", "tiny", "neat", "miniature");

var StyleBookshelves = SwitchKeyNode("style", { key:"rough", node:"bookshelves of roughly-planed boards" }, { key:"woven", node:"hanging bookshelves" }, { key:"carved", node:"tall carved bookshelves" }, { key:"precise", node:"tall rectilinear bookshelves" });

var TelescopeAdj = ChoiceNode("powerful", "strong", "high-powered");

var WritingRoomWord = ChoiceNode("room", "place", "chamber");

var WritingNookWord = ChoiceNode("nook", "spot", "alcove");

var HerbFollowup2 = ChoiceNode("the room smells of a dozen different herbs", "the place needs tidying, though", "the floor needs a good sweeping", "a few herbal reference books are stacked in the corner", "the light is dim", "the air is cool and dry");

var Doorway = ChoiceNode("door", "arch", "doorway", "archway", "opening");

var HistoricalCountryAdj = ShuffleNode("shuffle_17", "Russian", "German", "French", "Austrian", "Spanish", "Italian", "Portuguese", "Finnish", "British", "Welsh", "Scottish", "Mexican", "Prussian", "Ottoman", "Turkish", "French-Canadian", "Polish", "Swedish", "Norse", "Czech", "Serbian", "Javanese", "Balinese", "Indian", "Brazilian", "Argentinean", "Peruvian", "Venezualan", "Ethiopian", "Libyan", "Moroccan", "Congolese", "Zambian", "Australian", "Thai", "Cambodian", "Laotian", "Nepalese", "Afghan", "Iranian", "Syrian", "Egyptian", "Israeli", "Japanese", "Korean", "Chinese");

var ObservatoryDecorOne = ShuffleNode("shuffle_35", "star maps", "posters of distant nebulae", "timetables", "ephemerae", "astronomical charts");

var ObservatorySubject = ChoiceNode("plasma physics", "General Relativity", "stellar evolution", "cosmology", "black holes", "planetary geology");

var DeskWord = ChoiceNode("desk", "writing table", "worktable");

var SmellScentOdor = ShuffleNode("shuffle_22", "smell", "scent", "odor", "aroma");

var LibraryChairAdj = ChoiceNode("comfortable", "comfy", "worn", "threadbare", "polished", "wooden", "wicker", "swivelling", "battered");

var AcademicSubject = ShuffleNode("shuffle_19", "mathematics", "geometry", "programming", "electronics", "engineering", "literature", "sociology", "anthropology", "optics", "physics", "chemistry", "biology", "ancient history", "classical history", "law", "philology");

var FossilTypes = ShuffleNode("shuffle_29", "trilobytes", "ammonites", "nautiloid shells", "megafaunal vertebrae", "dinosaur vertebrae", "reptile teeth", "bony fish teeth", "dinosaur eggs", "giant sloth's claws", "fragments of petrified wood", "reptile footprints", "arthropod imprints", "leaf imprints", "moss imprints", "coprolites");

var GeneralHerbs = ShuffleNode("shuffle_32", "vervain", "bloodroot", "woodruff", "rue", "cinquefoil", "feverfew", "valerian", "lemon balm", "mayapple", "agrimony", "goldenseal", "yarrow", "liverwort", "snakeroot", "betony", "horehound", "goldenrod", "meadowsweet");

var FoodHerbs = ShuffleNode("shuffle_31", "mint", "basil", "thyme", "sorrel", "dandelion");

var PoweredPlace = ChoiceNode("place", "rooms", "hideout");

var RoughAdj = ShuffleNode("shuffle_2", "sturdy", "rough", "rough-hewn", "heavy", "roughly cut", "thick", "crude", "crudely cut");

var PreciseAdj = ChoiceNode("carefully-constructed", "precisely fitted", "carefully-architected", "precisely designed", "carefully-built", "precisely-made", "precisely-measured", "carefully measured", "intricately-fitted", "crazily-constructed", "madly-architected");

var ChamberGloss = ChoiceNode("cozy and snug", "cozy and quite dry", "snug and dry", "open to the summer breezes", "shielded from the winter wind", "spare but comfortable", "comfortably cluttered", "cozily cluttered", "filled with dry leaves", "overgrown with ivy", "comfortably padded with moss", "thickly padded with moss", "filled with the scent of growing things", "filled with the scent of greenery", "restful and quiet");

var BookAdj = ChoiceNode("fat", "thick", "thin", "worn", "worm-eaten", "grimy", "dusty", "handsome", "beautiful", "leather-bound", "second-hand", "used", "faded");

var PigmentColor = ShuffleNode("shuffle_12", "red", "brown", "black", "grey", "white", "brown", "tan", "beige", "blue", "green", "yellow");

var LibraryAtmAdj = ShuffleNode("shuffle_21", "dusty", "still", "quiet", "warm", "cozy", "comfortable", "fusty", "tranquil");

var RiverHerbs = ShuffleNode("shuffle_33", "watercress", "gypsywort", "bog sage", "swamp lily", "Jack-in-the-pulpit", "angelica");

var MountainHerbs = ShuffleNode("shuffle_34", "bearberry", "mountainheath", "trapper's tea", "alpine laurel", "saxifrage");

var FlowerColor = ChoiceNode("blue", "red", "violet", "yellow", "white", "orange", "magenta", "cyan");

var ViewIntroGeneric = ChoiceNode("I can sit and knit to pass the time", "sometime I'll sing out under the sky", "I can grab a book and read all day", "I'll sit and write for hours", "I can sketch lazily all day");

var LeadsTo = ChoiceNode("leads to", "opens to", "leads into", "opens into", "leads one to", "takes one to", "opens out to");

var RoughBeams = ChoiceNode("beams", "timbers", "logs");

var LeadTo = ChoiceNode("lead to", "open to", "lead into", "open into", "lead one to", "open out to");

var PreciseFlatDesc = ChoiceNode("rectilinear", "square-built", "right-angled", "skew-angled", "geodesic", "semicircular", "parabolic", "polygonal");

var PreciseFatDesc = ChoiceNode("rectilinear", "square-built", "right-angled", "cross-angled", "geodesic", "polyhedral", "hemispherical", "spherical", "cubical");

var ShortPreciseAdj = ChoiceNode("planed", "smoothed", "polished", "cut");

var PreciseBeams = ChoiceNode("beams", "boards", "slats", "posts");

var ChamberName = ChoiceNode("sleeping chamber", "sleeping room", "central room", "living chamber", "central chamber", "core room");

var FiguresNoun = ShuffleNode("shuffle_9", "people", "humans", "animals", "birds", "reptiles", "fish", "birds");

var CarvingDesc = ShuffleNode("shuffle_7", "strange", "beautiful", "peculiar", "irregular", "jagged", "symmetrical", "asymmetrical", "entwined", "tesselated");

var Carvings = ShuffleNode("shuffle_5", "figures", "pictographs", "ideographs", "symbols", "designs", "patterns", "diagrams", "outlines", "shapes");

var PreciseConstruction = ChoiceNode("construction", "structure", "place", "dwelling");

var PreciseOutline = ChoiceNode("silhouette", "profile", "outline");

var PreciseShortAdj = ShuffleNode("shuffle_13", "stable", "symmetrical", "regular", "balanced", "centered");

var PreciseShapes = ChoiceNode("angles", "triangles", "squares", "quadrilaterals", "semicircles", "circles", "ellipses", "parabolas");

var OneStructure = ChoiceNode("platform", "dome", "globe", "cube", "hut");

var PluralStructures = ChoiceNode("chambers", "domes", "cubbies", "rooms", "cubes");

var Carved = ShuffleNode("shuffle_3", "engraved", "carved", "incised", "decorated");

var MoreCarved = ShuffleNode("shuffle_4", "mosaiced", "inlaid", "ornamented");

var TreeGroupWord = ChoiceNode("copse", "stand", "grove", "thicket");

var TreeGroupWordMore = ChoiceNode("copse", "stand", "grove", "thicket", "cluster", "group");

var WovenShapeAdj = ChoiceNode("curved", "curving", "winding", "confusing", "twisty", "twisting", "bending");

var CarvingSubject = ShuffleNode("shuffle_6", "animal", "floral", "fossil", "astrological", "astronomical", "prehistoric", "mathematical", "geometric", "topological", "territorial", "geomantic", "theological", "thaumaturgic");

var ShortRoughAdj = ShuffleNode("shuffle_1", "sturdy", "rough", "heavy", "thick");

var FiguresAdj = ShuffleNode("shuffle_8", "dancing", "swaying", "entwining", "flocking");

var TreeAdj = ChoiceNode("tall", "broad", "old", "majestic", "battered", "scarred", "sagging");

var ForestTreeType = ChoiceNode("oak", "apple", "maple", "elm", "locust");

var RiverTreeType = ChoiceNode("acacia", "willow");

var MountainTreeType = ChoiceNode("pine", "spruce", "fir", "rowan");

var SwampTreeType = ChoiceNode("mangrove", "poplar");

var SavannahTreeType = ChoiceNode("baobab", "tamarind");

var CarvedSpecials = ChoiceNode("moire patterns", "fractal patterns", "recursive patterns");

var LumberStuffJunk = ShuffleNode("shuffle_38", "some dirty brushes", "some packing foam", "too many envelopes", "too many coat hangers", "magazines I will never read again", "old junk mail", "extra power cords", "reams of blank paper", "old RPG notes", "old game maps", "worn-out shoes", "homework from classes of long ago", "assorted dolls", "assorted stuffed animals");

var LumberSubstance = ChoiceNode("paper", "wood", "metal", "plastic", "lumber");

var LumberLeftover = ChoiceNode("leftover", "random", "half-used");

var RoomRelativeDir = IfKeyNode("relation", "room", 
  ShuffleNode("shuffle_15", "behind that", "below that", "to the left", "to the right", "above that", "to one side"), 
  ShuffleNode("shuffle_16", "nearby", "near there", "in the rear", "on the left side", "on the right side"));

var WritingRoomSpace = SequenceNode(SpecialNode.AAn, 
  ChoiceNode("narrow", "low", "long", "round", "circular", "irregular"), 
  ChoiceNode("space", "area"));

var LibraryFollowup2 = SequenceNode(SpecialNode.AAn, 
  ChoiceNode(null, null, null, "small", "delicate"), 
  ShuffleNode("shuffle_24", "pitcher of water", "plate of cookies", "basket of bread", "plate of cheese", "bowl of candy", "glass of wine"), 
  ChoiceNode("rests", "sits"), 
  ChoiceNode("on a side table", "nearby", "on a sideboard"));

var LumberJudgement = SwitchKeyNode("stuffvalue", { key:"low", node:
  ChoiceNode("it's probably not worth anything, but one never knows when you might need it", "one never knows when one might need it", "I might need some of it someday", "I never throw that stuff away", "I'm not sure why I keep it", "I'll throw it out eventually", "I'll never use any of it, I'm sure", "nothing here is good for much, probably", "I am inexplicably comforted by the uselessness of it all", "what a mess") }, { key:"high", node:
  ChoiceNode("these are old treasures to me", "I keep these things safe", "I'll keep these things forever", "I can't imagine getting rid of this stuff", "probably worth quite a bit, this stuff", "I won't describe the security systems", "it's all well-protected, mind you", "many of these things are irreplaceable") });

var PoweredPlaceSing = SequenceNode(
  ChoiceNode("whole", "entire", null, null), 
  ChoiceNode("place", "hideout", "construction", "thing"));

var PhysicalChamberAdjList = ShuffleNode("shuffle_14", 
  ChoiceNode("low", "tall"), 
  ChoiceNode("broad", "wide", "spacious", "narrow", "vast"), 
  ChoiceNode("uneven", "crooked"), 
  ChoiceNode("dim", "bright", "shadowy", "well-lit"));

var Fossils = SequenceNode(
  ShuffleNode("shuffle_30", "ancient", "weathered", "worn", "cracked", "broken", null, null, null, null, null), FossilTypes);

var AFewFossils = SequenceNode(
  ChoiceNode("occasional", "a few", "a couple of", null, null, null), FossilTypes);

var PowerFlowers = SequenceNode("genetically engineered", 
  ChoiceNode("black", "grey", "dark blue", "dark green", "dark red", "brown"), 
  ChoiceNode("flowers", "blossoms", "leaves"));

var MultiPhrase = ChoiceNode(
  "cluster of", 
  "group of", 
  "array of", 
  "ring of", 
  "row of");

var SubjCarvings = SequenceNode(CarvingSubject, Carvings);

var DescCarvings = SequenceNode(CarvingDesc, Carvings);

var CarvedQuality = SequenceNode(
  ChoiceNode("mysterious", "serene", "occult", "welcoming", "unnerving", "unearthly", "alien", "antique", "relaxing", "jaunty", "cheerful"), 
  ChoiceNode("quality", "air", "atmosphere", "appearance"));

var PreciseQuality = SequenceNode(
  ChoiceNode("firm", "serene", "formal", "welcoming", "stolid", "bluff", "reassuring", "antique", "relaxing", "solid", "cheerful"), 
  ChoiceNode("quality", "air", "atmosphere", "appearance"));

var TreeType = SwitchKeyNode("terrain", { key:"forest", node:ForestTreeType }, { key:"river", node:RiverTreeType }, { key:"mountain", node:MountainTreeType }, { key:"swamp", node:SwampTreeType }, { key:"savannah", node:SavannahTreeType });

var OverallTheWalls = IfKeyNode("overallwallssaid", "t", "they", 
  SetKeyNode("overallwallssaid", "t", "the walls"));

var OverallThemWalls = IfKeyNode("overallwallssaid", "t", "them", 
  SetKeyNode("overallwallssaid", "t", "the walls"));

var CarvedLines = SequenceNode(
  ChoiceNode("fine", "narrow", "thin", "wide", "angular", "parallel", "sinusoidal"), 
  ChoiceNode("lines", "bands"));

var CarvedMandalas = SequenceNode(
  ChoiceNode("concentric", "radiating", "nested"), 
  ChoiceNode("mandalas", "wheels", "spirals"));

var FiguresOfFoo = SequenceNode(
  ChoiceNode("figures", "shapes"), "of", FiguresAdj, FiguresNoun);

var LumberStuffExtra = SequenceNode(
  ChoiceNode("as well as", "not to mention", "plus", "and also"), LumberStuffJunk);

var WritingDesk = ChoiceNode(
  SequenceNode(SpecialNode.AAn, 
    ChoiceNode("ornate", "bare", "antique", "old-fashioned"), DeskWord, "sits", 
    ChoiceNode("in the center", "to the side")), 
  SequenceNode(SpecialNode.AAn, 
    ChoiceNode("small", "tidy", "clean", "messy"), DeskWord, "is waiting"), 
  SequenceNode("my", DeskWord, "is in back"));

var LadderIntro = ChoiceNode(
  SequenceNode("the", 
    ChoiceNode("altitude", "height"), "protects me from all dangers"), 
  "up in the tree, I am safe", 
  SequenceNode("I enjoy living in the", 
    ChoiceNode("heights", "air")), 
  SequenceNode("living in a tree is", 
    ChoiceNode("great", "cool", "awesome")), 
  SequenceNode("the", 
    ChoiceNode("place", "hideout", "treehouse"), "is easily", 
    ChoiceNode("defensible", "accessible")), 
  SequenceNode("getting", 
    ChoiceNode("in and out", "into the treehouse", "in"), "is", 
    ChoiceNode("no trouble", "no problem", "fun")));

var ViewPreAspect = ChoiceNode(
  SequenceNode("from the roof", SpecialNode.Comma), 
  SequenceNode("a periscope sticks up from the", 
    ChoiceNode("hideout", "structure"), 
    ChoiceNode(SpecialNode.Semicolon, SpecialNode.Period), "with that", SpecialNode.Comma), 
  SequenceNode("looking out the windows", SpecialNode.Comma), 
  SequenceNode("standing on the balcony", SpecialNode.Comma), 
  SequenceNode("from the top of the", 
    ChoiceNode("hideout", "structure"), SpecialNode.Comma), 
  SequenceNode("the view is", 
    ChoiceNode("amazing", "incredible", "stunning"), 
    ChoiceNode(SpecialNode.Semicolon, SpecialNode.Period)), 
  SequenceNode("I like to relax and watch the landscape", 
    ChoiceNode(SpecialNode.Semicolon, SpecialNode.Period)), 
  "I can climb to an upper branch, where", 
  "a catwalk runs to a lookout post in a taller tree, where");

var InitDescWoven = SequenceNode(
  ChoiceNode(
    "basket-woven of", 
    "woven of", 
    SequenceNode(SpecialNode.AAn, "mesh of"), 
    SequenceNode(SpecialNode.AAn, "meshwork of"), 
    SequenceNode(SpecialNode.AAn, "basket woven of"), 
    SequenceNode(SpecialNode.AAn, "basket of woven"), 
    SequenceNode(SpecialNode.AAn, "nest of woven")), 
  ChoiceNode("leaves", "branches", "tree branches", "leafy branches", "leaves and branches", "branches and leaves"), SpecialNode.Comma);

var ObservatoryDecor = ChoiceNode(ObservatoryDecorOne, 
  SequenceNode(ObservatoryDecorOne, "and", ObservatoryDecorOne));

var WritingTexturesRough = ShuffleNode("shuffle_25", 
  "panelled in dark, heavy wood", 
  SequenceNode(
    ChoiceNode("lined", "hung"), "with heavy tapestries"), 
  SequenceNode("hung with", 
    ChoiceNode("thick", "coarse"), 
    ChoiceNode("brocades", "linen curtains")), 
  SequenceNode("lined with bundled", 
    ChoiceNode("hay", "straw")));

var WritingTexturesCarved = ShuffleNode("shuffle_26", 
  "panelled in carved wood", 
  SequenceNode(
    ChoiceNode("lined", "hung"), "with ornate tapestries"), 
  "lined with pierced wooden screens", 
  SequenceNode("decorated", 
    ChoiceNode("here and there", "thickly", null, null), "with tiny relief carvings"));

var WritingTexturesPrecise = ShuffleNode("shuffle_27", 
  SequenceNode("panelled in", 
    ChoiceNode("spare", "bare", "clean"), 
    ChoiceNode("dark", "light", "pale", null, null, null), "wood"), 
  SequenceNode("surrounded by", 
    ChoiceNode("plain", "simple", "bare"), "walls"), 
  SequenceNode("neatly", 
    ChoiceNode("laid out", "arranged")));

var Herbs = ChoiceNode(GeneralHerbs, 
  SwitchKeyNode("terrain", { key:"forest", node:GeneralHerbs }, { key:"river", node:RiverHerbs }, { key:"mountain", node:MountainHerbs }, { key:"swamp", node:RiverHerbs }, { key:"savannah", node:"herbs" }));

var RoughEntrance = ChoiceNode(
  SequenceNode(SpecialNode.AAn, 
    ChoiceNode("low", "tall", "wide", "broad", "narrow"), Doorway, LeadsTo), 
  SequenceNode("behind", SpecialNode.AAn, 
    ChoiceNode("low", "tall", "wide", "broad", "narrow", "crude", "rough"), Doorway, "is"), 
  SequenceNode(SpecialNode.AAn, RoughAdj, Doorway, LeadsTo), 
  SequenceNode(SpecialNode.AAn, RoughAdj, 
    ChoiceNode("passage", "hall", "hallway"), LeadsTo), 
  SequenceNode(SpecialNode.AAn, 
    ChoiceNode("passage", "hall", "hallway"), "of", RoughAdj, RoughBeams, LeadsTo), 
  SequenceNode(SpecialNode.AAn, Doorway, "of", RoughAdj, RoughBeams, LeadsTo), 
  SequenceNode("rows of", RoughAdj, RoughBeams, LeadTo));

var PreciseEntrance = ChoiceNode(
  SequenceNode(SpecialNode.AAn, 
    ChoiceNode("low", "tall", "wide", "broad", "narrow"), Doorway, LeadsTo), 
  SequenceNode("beyond", SpecialNode.AAn, 
    ChoiceNode("low", "tall", "wide", "broad", "narrow"), Doorway, "is"), 
  SequenceNode(SpecialNode.AAn, PreciseFlatDesc, Doorway, LeadsTo), 
  SequenceNode(SpecialNode.AAn, PreciseFatDesc, 
    ChoiceNode("entryway", "anteroom", "atrium", "entry"), LeadsTo), 
  SequenceNode(SpecialNode.AAn, 
    ChoiceNode("passage", "hall", "hallway"), "of", ShortPreciseAdj, PreciseBeams, LeadsTo), 
  SequenceNode(SpecialNode.AAn, 
    ChoiceNode("entryway", "anteroom", "atrium", "entry"), "of", ShortPreciseAdj, PreciseBeams, LeadsTo));

var ExtPigmentColor = SequenceNode(
  OptNode(0.5000, 
    ChoiceNode("faded", "smoky", "dull", "bright", "worn")), PigmentColor);

var LibraryAtmosphere = ChoiceNode(LibraryAtmAdj, 
  SequenceNode(LibraryAtmAdj, "and", LibraryAtmAdj));

var MythicalCountry = SequenceNode(
  OptNode(0.5000, 
    ChoiceNode("Lost", "lost", "ancient", "vanished", "sunken", "Fallen", "fallen")), 
  ShuffleNode("shuffle_18", "Mu", "Atlantis", "Huybraseal", "Nafsulia", "Hyperborea", "Cimmeria", "Avalon", "Gondwana", "Pangaea", "Inner Earth", "Laputa"));

var LumberFollowup = ChoiceNode("light filters in through narrow windows", 
  SequenceNode("there's", 
    ChoiceNode("barely", "hardly", "not much"), "room to walk"), 
  SequenceNode("the space feels", 
    ChoiceNode("bare", "barren", "empty"), SpecialNode.Comma, "despite", 
    ChoiceNode("appearances", "the amount of stuff")), 
  SequenceNode("dust lies", 
    ChoiceNode("thinly", "thickly", "heavily"), 
    ChoiceNode("on everything", "everywhere", "in the corners")), "the place needs serious tidying", "the floor needs sweeping", "a musty odor hangs in the air", "the air is faintly damp", "I'm pretty sure I know where everything is", "I lose track of things in there", 
  SequenceNode("I haven't looked at some of", 
    ChoiceNode("this stuff", "these things"), "for", 
    ChoiceNode("months", "years")), "anything could be lurking back here", 
  SequenceNode("a few", 
    ChoiceNode("cobwebs", "spiderwebs"), "hang in the corners"));

var ModOneStructure = ChoiceNode(
  SequenceNode(
    OptNode(0.3000, "wooden"), OneStructure));

var ModPluralStructures = ChoiceNode(
  SequenceNode(
    OptNode(0.1500, "wooden"), PluralStructures));

var CarvedAdj = SequenceNode(
  ChoiceNode("delicately", "intricately", "ornately", "beautifully", "fantastically"), 
  OptNode(0.5000, 
    SequenceNode(SpecialNode.Concat, "-", SpecialNode.Concat)), 
  ChoiceNode(Carved, MoreCarved));

var ExtWovenShapeAdj = SequenceNode(
  OptNode(0.2500, 
    ChoiceNode("narrow", "low")), WovenShapeAdj);

var OptWovenParenthetical = OptNode(0.2000, 
  ChoiceNode(
    SequenceNode(SpecialNode.Comma, "with no straight lines", SpecialNode.Comma), 
    SequenceNode(SpecialNode.Comma, "with no right angles", SpecialNode.Comma), 
    SequenceNode(SpecialNode.Comma, "soft and with no straight lines", SpecialNode.Comma), 
    SequenceNode(SpecialNode.Comma, "soft and with no right angles", SpecialNode.Comma)));

var PreciseLongAdj = SequenceNode(
  ChoiceNode(
    SequenceNode("well-", SpecialNode.Concat), "neatly", "tidily", "sweetly"), 
  ChoiceNode("braced", "buttressed", "framed", "supported"));

var RoomEntrance = SequenceNode(
  ChoiceNode("past", "beyond", "through"), SpecialNode.AAn, 
  AltWeightNode({ node:PhysicalChamberAdjList, weight:3.000 }, { node:
    ChoiceNode("hidden", "secret", "sliding"), weight:1.000 }), Doorway);

var PhysicalChamberAdj = ChoiceNode(null, null, PhysicalChamberAdjList, 
  SequenceNode(PhysicalChamberAdjList, SpecialNode.Comma, PhysicalChamberAdjList));

var PowerLocationDesc = ChoiceNode(
  SequenceNode(
    ChoiceNode("at the base of the tree", "on a side platform", "in a hollow in the trunk"), 
    ChoiceNode(null, null, 
      SequenceNode(SpecialNode.Comma, "slightly elevated"), 
      SequenceNode(SpecialNode.Comma, "in a small cabinet"))), 
  ChoiceNode(
    "in a sling hanging from a branch", 
    "on a pallet across two branches"));

var ViewMain = SwitchKeyNode("terrain", { key:"mountain", node:
  ChoiceNode(
    SequenceNode("I can see the", 
      ChoiceNode("pine trees", "spruce trees", "firs", "conifers", "evergreens"), "slope gently off to where the mountains begin"), 
    "I can watch the clouds pour over the mountaintops", 
    SequenceNode("I can see", 
      ChoiceNode("distant rivers in the", "rivers shining in the distant"), "valley bottoms"), 
    SequenceNode("I can see the peaks glittering in the", 
      ChoiceNode("morning", "afternoon"), 
      ChoiceNode("sun", "sunshine", "sunlight"))) }, { key:"river", node:
  ChoiceNode(
    SequenceNode("I can see leaves drift slowly", 
      ChoiceNode("downstream", "downriver", "in the current")), 
    SequenceNode("I can see the waterfall far", 
      ChoiceNode("upstream", "upriver")), 
    "I can see the shadows of fish moving in the river", 
    SequenceNode("I'll watch", 
      ChoiceNode("morning", "afternoon"), 
      ChoiceNode("sun", "sunshine", "sunlight"), "glitter on the water below"), "I can see the opposite riverbank, where the trees are thicker and the shadows heavier") }, { key:"swamp", node:
  ChoiceNode(
    SequenceNode("I'll watch the", 
      ChoiceNode("mist", "fog"), "drift slowly through the reeds below"), 
    "I can see the trees rising from the water below", 
    SequenceNode("I can see the shadows of fish moving", 
      ChoiceNode("slowly in the", "in the stagnant"), "water"), 
    "I can watch the water moving slowly between the trees") }, { node:
  ChoiceNode(
    SequenceNode("I can see the treetops", 
      ChoiceNode("waving", "moving"), "slowly below me"), 
    "I can see trees spread out all around me", 
    "I can watch shadows roll across the hills as the sun sets", 
    SequenceNode("I can watch the wind", 
      ChoiceNode("in", "ruffle"), "the treetops"), 
    "I'll trace the forest paths that wind between the trees below") });

var WritingTexturesWoven = ShuffleNode("shuffle_28", 
  SequenceNode(
    ChoiceNode("lined", "hung"), "with fine tapestries"), 
  SequenceNode("hung with swatches of woven", 
    OptNode(0.4000, PigmentColor), "cloth"), 
  SequenceNode("surrounded by a weave of", 
    OptNode(0.6000, PigmentColor), "ribbons"), 
  "lined with an openwork mesh of branches");

var OneTree = ChoiceNode(
  SequenceNode(SpecialNode.AAn, 
    OptNode(0.3000, TreeAdj), TreeType), 
  SequenceNode(SpecialNode.AAn, 
    OptNode(0.3000, TreeAdj), TreeType, "tree"));

var TreeGroup = ChoiceNode(
  SequenceNode(SpecialNode.AAn, TreeType, TreeGroupWord), 
  SequenceNode(SpecialNode.AAn, TreeGroupWordMore, "of", 
    OptNode(0.1500, TreeAdj), TreeType, SpecialNode.Concat, "s"));

var LumberStuffHigh = SequenceNode(
  SetKeyNode("stuffvalue", "high"), 
  OptNode(0.3000, 
    ChoiceNode("my collection of", "an assortment of")), 
  ChoiceNode("mineral specimens", "antique vinyl record albums", 
    SequenceNode(
      ChoiceNode("antique", "hand-tinted"), 
      ChoiceNode("photographs", "daguerrotypes", "chromatypes")), "vintage clothing", 
    SequenceNode("balls of hand-dyed", 
      ChoiceNode("yarn", "wool")), 
    SequenceNode(
      ChoiceNode("coins", "stamps"), "from various countries"), "my old source code", 
    SequenceNode("rare", 
      ChoiceNode("books", "folios", "manuscripts")), "musical instruments", 
    SequenceNode(
      ChoiceNode("tiny", "small"), 
      ChoiceNode("carved wooden", "cast metal", "colorful plastic"), "puzzles"), 
    ChoiceNode("arcade cabinets", "pinball machines"), "stuffed animals", "blown-glass paperweights", 
    SequenceNode("fine", 
      ChoiceNode("blades", "knives", "weapons"))));

var OverallThemWoodenWalls = IfKeyNode("overallwallssaid", "t", "them", 
  SetKeyNode("overallwallssaid", "t", 
    SequenceNode("the", 
      OptNode(0.5000, "wooden"), "walls")));

var OverallTheWovenWalls = IfKeyNode("overallwallssaid", "t", "they", 
  SetKeyNode("overallwallssaid", "t", 
    SequenceNode("the", 
      OptNode(0.5000, "woven"), "walls")));

var EngravedDesc = ChoiceNode(
  SequenceNode(Carved, "with", SubjCarvings), 
  SequenceNode(Carved, "with", "the", FiguresOfFoo), 
  SequenceNode(Carved, "with", CarvingDesc, SubjCarvings), 
  SequenceNode(Carved, "with", Carvings, "and", SubjCarvings));

var SavannahFossils = SequenceNode(RoomRelativeDir, SetRoomRelation, "is", 
  OptNode(0.4000, "where I keep"), "my", 
  ChoiceNode("fossil collection", "storehouse of fossils", "fossil display"), SpecialNode.Period, 
  ChoiceNode(
    SequenceNode("rows of", Fossils, "rest on shelves among", Fossils), 
    SequenceNode(Fossils, "and", AFewFossils, "are neatly arranged everywhere"), 
    SequenceNode("I have", Fossils, SpecialNode.Comma, Fossils, "and", AFewFossils, "here"), 
    SequenceNode("long days of searching the", 
      ChoiceNode("nearby ravines", "karst", "canyons"), "have turned up many", Fossils, "and", AFewFossils)));

var ObservatorySeat = ChoiceNode("warm cushions", 
  SequenceNode(SpecialNode.AAn, 
    ChoiceNode("ratty old", "old ratty", "worn-out"), "sofa"), "an overstuffed armchair", "a reclining seat", 
  SequenceNode(SpecialNode.AAn, ExtPigmentColor, "beanbag chair"), "a repurposed dentist's chair", "an old rocking chair");

var WritingTextures = SwitchKeyNode("style", { key:"rough", node:WritingTexturesRough }, { key:"woven", node:WritingTexturesWoven }, { key:"carved", node:WritingTexturesCarved }, { key:"precise", node:WritingTexturesPrecise });

var LibraryFollowup = ShuffleNode("shuffle_23", 
  SequenceNode("the air is", LibraryAtmosphere), 
  SequenceNode("it is", 
    ChoiceNode("rather", "very"), LibraryAtmosphere), 
  SequenceNode("the", SmellScentOdor, "of", 
    ChoiceNode("paper", "ink", "ink and paper", "old paper"), 
    ChoiceNode("is thick there", "fills the room", "permeates the place")), 
  SequenceNode(
    ChoiceNode("dim", "yellow", "faint", "pale"), "light", 
    ChoiceNode("radiates", "shines"), "from hidden", 
    ChoiceNode("lamps", "sconces", "recesses", "skylights")), 
  SequenceNode(SpecialNode.AAn, LibraryChairAdj, "chair sits in the middle of the room"), 
  SequenceNode(LibraryChairAdj, "chairs are scattered around"));

var WritingFollowup = ChoiceNode("crumpled paper lies in the corners", 
  SequenceNode("a few pieces of", 
    ChoiceNode("crumpled", "discarded"), "paper lie in the corners"), 
  SequenceNode("there's", SpecialNode.AAn, 
    ChoiceNode("errant", "stray"), "ink-stain here and there"), 
  SequenceNode("a few handy reference books sit in the corner", SpecialNode.Comma, AcademicSubject, "and", AcademicSubject), 
  SequenceNode("a map of", MythicalCountry, "hangs on the wall"), "a blank sheet of paper awaits", 
  SequenceNode(
    ChoiceNode("scrawled", "hasty"), "notes lie around the desk"), "my pens are neatly lined up and ready");

var HerbFollowup1 = ChoiceNode(
  SequenceNode("a basket of", 
    ChoiceNode("fresh", "new", null), FoodHerbs, "waits for tonight's dinner"), 
  SequenceNode("jars of", 
    ChoiceNode("dried leaves and powders", "leaves and ground roots", "powders and leaves"), "are lined up on the shelves"), 
  SequenceNode("jars of", Herbs, "are lined up in back"), "small drawers in back hold samples of other herbs I've found", 
  SequenceNode("an arrangement of", 
    ChoiceNode("fresh", "dried"), 
    OptNode(0.5000, FlowerColor), "flowers sprouts from a vase"), "empty baskets are piled to the side");

var PoweredFollowup = ChoiceNode(
  SequenceNode("I have", SpecialNode.AAn, 
    ChoiceNode("nuclear power", "tiny fusion", "tiny fission"), "plant that I carved out of", SpecialNode.AAn, 
    ChoiceNode("stump", "boulder")), 
  SequenceNode("I have", SpecialNode.AAn, 
    OptNode(0.5000, FlowerColor), "power crystal from", MythicalCountry), 
  "a rectenna is locked onto a power satellite", 
  "I keep a tiny bottle of antimatter in the fridge", 
  SequenceNode("I have an alien power", 
    ChoiceNode("core", "generator", "source"), "salvaged from some", HistoricalCountryAdj, "crash site"));

var InitDescRough = ChoiceNode(
  SequenceNode(SpecialNode.AAn, RoughAdj, 
    SetKeyNode("pluralstructure", "s"), ModOneStructure), 
  SequenceNode(SpecialNode.AAn, RoughAdj, MultiPhrase, 
    SetKeyNode("pluralstructure", "p"), ModPluralStructures), 
  SequenceNode(SpecialNode.AAn, MultiPhrase, RoughAdj, 
    SetKeyNode("pluralstructure", "p"), ModPluralStructures));

var InitDescCarved = ChoiceNode(
  SequenceNode(SpecialNode.AAn, CarvedAdj, 
    SetKeyNode("pluralstructure", "s"), ModOneStructure), 
  SequenceNode(SpecialNode.AAn, CarvedAdj, MultiPhrase, 
    SetKeyNode("pluralstructure", "p"), ModPluralStructures), 
  SequenceNode(SpecialNode.AAn, MultiPhrase, CarvedAdj, 
    SetKeyNode("pluralstructure", "p"), ModPluralStructures));

var InitDescPrecise = ChoiceNode(
  SequenceNode(SpecialNode.AAn, PreciseAdj, 
    SetKeyNode("pluralstructure", "s"), ModOneStructure), 
  SequenceNode(SpecialNode.AAn, PreciseAdj, MultiPhrase, 
    SetKeyNode("pluralstructure", "p"), ModPluralStructures), 
  SequenceNode(SpecialNode.AAn, MultiPhrase, PreciseAdj, 
    SetKeyNode("pluralstructure", "p"), ModPluralStructures));

var WovenEntrance = ChoiceNode(
  SequenceNode(SpecialNode.AAn, ExtWovenShapeAdj, 
    ChoiceNode("hall", "passage"), OptWovenParenthetical, LeadsTo), 
  SequenceNode(SpecialNode.AAn, "series of", ExtWovenShapeAdj, 
    ChoiceNode("chambers", "rooms", "passages"), OptWovenParenthetical, LeadTo), 
  SequenceNode(SpecialNode.AAn, "few", ExtWovenShapeAdj, 
    ChoiceNode("chambers", "rooms", "passages"), OptWovenParenthetical, LeadTo), 
  SequenceNode("several", ExtWovenShapeAdj, 
    ChoiceNode("chambers", "rooms", "passages"), OptWovenParenthetical, LeadTo), 
  SequenceNode(SpecialNode.AAn, ExtWovenShapeAdj, 
    ChoiceNode("hall", "passage"), 
    ChoiceNode("runs", "leads"), "through the", 
    ChoiceNode("mesh", "network", "basketry"), 
    ChoiceNode("to", "into")), 
  SequenceNode(SpecialNode.AAn, 
    ChoiceNode("hall", "passage"), 
    ChoiceNode("runs", "leads"), "through the", ExtWovenShapeAdj, 
    ChoiceNode("mesh", "network", "basketry"), 
    ChoiceNode("to", "into")));

var PreciseOverall = ChoiceNode(
  SequenceNode("the", PreciseConstruction, SpecialNode.Concat, "'s", PreciseOutline, "is", PreciseShortAdj, SpecialNode.Comma, "giving it", SpecialNode.AAn, PreciseQuality), 
  SequenceNode("the", PreciseConstruction, SpecialNode.Concat, "'s", PreciseOutline, "is", SpecialNode.AAn, "series of", PreciseShortAdj, PreciseShapes), 
  SequenceNode("the", PreciseConstruction, "has", SpecialNode.AAn, PreciseShortAdj, SpecialNode.Comma, PreciseShortAdj, "profile"), 
  SequenceNode("the", PreciseOutline, "is subtly", PreciseShortAdj, "and", PreciseShortAdj), 
  SequenceNode("the", PreciseConstruction, "is", PreciseShortAdj, "and", PreciseLongAdj));

var ViewIntroTerrain = SwitchKeyNode("terrain", { key:"mountain", node:
  ChoiceNode("in the afternoons, the mountains cut triangular shadows through the blue air", "the sky is enormous and very blue", "the air carries the distant scent of snow", "a glacier is visible, snaking between distant peaks") }, { key:"river", node:
  ChoiceNode(
    SequenceNode("the", 
      ChoiceNode("sounds of the river permeate", "sound of the river permeates"), "the", 
      ChoiceNode("hideout", "structure")), 
    SequenceNode("the river rolls gently past the", 
      ChoiceNode("foot", "base", "roots"), "of the tree"), 
    SequenceNode("the water", 
      ChoiceNode("rushes and froths", "froths", "whips white"), "on windy days")) }, { key:"swamp", node:
  ChoiceNode("the green marsh waters lie all around", 
    SequenceNode(
      OptNode(0.3500, FlowerColor), "birds dart among the reeds"), "occasionally something moves beneath the surface of the swamp", 
    SequenceNode(
      ChoiceNode("trailing moss hangs", "moss trails"), "from the tree branches")) }, { key:"savannah", node:
  ChoiceNode(
    SequenceNode(
      ChoiceNode("pale", null), "dust hangs in the air"), 
    SequenceNode("the rolling", 
      ChoiceNode("bare", "grassy"), "hills stand against", SpecialNode.AAn, 
      ChoiceNode("pale dusty", "cloud-streaked"), "sky"), "the trees are sparse out here, but very green", 
    SequenceNode(
      ChoiceNode("antelope", "gazelle", "buffalo"), 
      ChoiceNode("browse", "graze"), 
      ChoiceNode("below", "nearby", "among the trees"))) }, { node:
  ChoiceNode("birds call in the treetops", 
    SequenceNode("occasionally I spot", SpecialNode.AAn, 
      ChoiceNode("deer", "rabbit"), "on the forest floor"), "the sunlight is bright up above the forest canopy", 
    SequenceNode(
      ChoiceNode("fat", "puffy", "striated"), "clouds drift overhead")) });

var PlaqueItem = ShuffleNode("shuffle_39", 
  SequenceNode("some runes from", MythicalCountry, "(just to confuse people)"), "the words \"Keep Out\"", "the word \"Welcome\"", "my age", "my height", "the tree's species in Latin", "the latitude and longitude", 
  SwitchKeyNode("terrain", { key:"river", node:"the name of the nearby river" }, { key:"swamp", node:"the name of the surrounding swamp" }, { key:"mountain", node:"the name of the nearby mountain" }, { key:"forest", node:"the name of the surrounding forest" }, { key:"savannah", node:"the name of the surrounding steppe" }, { node:"the name of a local landmark" }));

var OverallTheRoughWalls = IfKeyNode("overallwallssaid", "t", "they", 
  SetKeyNode("overallwallssaid", "t", 
    SequenceNode("the", 
      OptNode(0.5000, RoughAdj), "walls")));

var CarvedPigment = ChoiceNode(
  SequenceNode("in", ExtPigmentColor), 
  SequenceNode("in", PigmentColor, "and", PigmentColor), 
  SequenceNode(SpecialNode.Comma, 
    ChoiceNode("stained", "painted", "dyed"), ExtPigmentColor, SpecialNode.Comma));

var ObservatoryFollowup = ShuffleNode("shuffle_36", 
  "I have spent many nights there", 
  "the arrangement was a challenge to construct, but worthwhile", 
  SequenceNode("the doorway is blocked by", SpecialNode.AAn, 
    ChoiceNode("dark", "black", "heavy, opaque"), "curtain"), 
  ChoiceNode(
    SequenceNode("the walls are", 
      ChoiceNode("decorated", "hung"), "with", ObservatoryDecor), 
    SequenceNode(ObservatoryDecor, 
      ChoiceNode("adorn", "cover"), "the walls")), 
  SequenceNode(
    ChoiceNode("I've left", "there are"), "stacks of hand-written", 
    ChoiceNode("observations", "notes and charts", "notes and observations"), 
    ChoiceNode("all over", "scattered around", "here and there")), 
  SequenceNode(SpecialNode.AAn, 
    ChoiceNode("bookshelf", "shelf", "rack"), "of astronomy", 
    ChoiceNode("textbooks", "reference books"), 
    OptNode(0.3000, 
      SequenceNode("(and", 
        ChoiceNode("some", "a few"), "on", ObservatorySubject, SpecialNode.Concat, ")")), "stands to the side"), 
  SequenceNode(SpecialNode.AAn, 
    ChoiceNode("decorative ormolu", "heavy brass", "dark wooden case", 
      SequenceNode("delicate glass water-", SpecialNode.Concat), "cheap electric", "antique mechanical"), "clock stands on", SpecialNode.AAn, 
    ChoiceNode("bench", "side table", "pile of blocks")), 
  SequenceNode(SpecialNode.AAn, 
    ChoiceNode("brass", "mechanical", "gear-ridden", null, null), "orrery rests on", SpecialNode.AAn, 
    ChoiceNode("iron", "mahogany", "oaken", "marble", "granite", null, null), "stand", SpecialNode.Comma, 
    ChoiceNode("rotating slowly in time with the heavens", "tracking the movement of the heavens", "in memory of simpler models of the universe", null)), 
  SwitchKeyNode("style", { key:"rough", node:"the floor is chocked to lie level on its underlying beams" }, { key:"woven", node:"the floor is carefully levelled within its cradle of greenery" }, { key:"carved", node:"the floor is carved with a map of the constellations" }, { key:"precise", node:"the floor is carefully levelled on the underlying beams" }));

var PoweredPerTerrain = SwitchKeyNode("terrain", { key:"river", node:
  SequenceNode(SpecialNode.AAn, 
    OptNode(0.5000, TinyObservatoryAdj), 
    ChoiceNode("wooden", "steel", "plastic", null), 
    ChoiceNode("water wheel", "turbine"), 
    ChoiceNode("turns", "spins", "rotates"), 
    ChoiceNode("briskly", "quickly", "lazily", null), "in the", 
    ChoiceNode("river", "stream"), 
    ChoiceNode(null, "below", 
      SequenceNode(SpecialNode.Concat, "'s current")), 
    ChoiceNode(null, 
      SequenceNode(SpecialNode.Period, "it supplies enough power for my needs"), 
      SequenceNode(SpecialNode.Comma, "powering the", PoweredPlaceSing), 
      SequenceNode(SpecialNode.Comma, "leaving a trail of", 
        ChoiceNode("bubbles", "foam"), "in the water"))) }, { key:"swamp", node:
  SequenceNode("my power comes from the", 
    ChoiceNode("swamp", "marsh"), SpecialNode.Period, 
    ChoiceNode("low", "broad", "vast", null), 
    ChoiceNode("umbrella-shaped", "trumpet-shaped", "phosphorescent"), "flowers float", 
    ChoiceNode("on the dark water", "in the waterways"), SpecialNode.Comma, 
    ChoiceNode("gathering", "trapping", "absorbing"), "methane", 
    ChoiceNode("and channeling it", 
      SequenceNode(SpecialNode.Semicolon, "the vapor passes")), 
    ChoiceNode("through", "up"), 
    OptNode(0.6600, "hollow"), "vines to", SpecialNode.AAn, 
    OptNode(0.5000, TinyObservatoryAdj), 
    ChoiceNode("organic", "high-tech", null), "fuel cell") }, { key:"mountain", node:
  SequenceNode(SpecialNode.AAn, 
    ChoiceNode("tall", "high", "rickety", null), 
    ChoiceNode("eggbeater", "fan-shaped"), "windmill towers over the", PoweredPlaceSing, SpecialNode.Comma, 
    ChoiceNode("turning", "spinning", "rotating"), 
    ChoiceNode(
      SequenceNode(
        ChoiceNode("briskly", "quickly", "lazily", null), "in the mountain"), 
      SequenceNode("in the", 
        ChoiceNode("brisk", "chill", "sharp"), "mountain")), 
    ChoiceNode("breeze", "wind")) }, { node:
  SequenceNode(
    ChoiceNode("my power comes from", "the place is powered by"), "the", 
    OptNode(0.5000, "inherent"), "bioelectric fields of the trees themselves", 
    ChoiceNode(
      SequenceNode(SpecialNode.Semicolon, "I'm not exactly sure how"), 
      SequenceNode(SpecialNode.Period, "I'm not sure how it works"), 
      SequenceNode(SpecialNode.Period, "it's sort of mysterious, but it works"), "-- somehow"), 
    OptNode(0.3000, 
      SequenceNode(SpecialNode.Period, 
        ChoiceNode("at night, a faint blue aurora shines around the branches", "the trees seem to hum faintly at night", "I can always sense a dim warmth coming from the tree bark")))) });

var SimpleLocation = ChoiceNode(
  SequenceNode("high in", OneTree), 
  SequenceNode("low in", OneTree), 
  SequenceNode("hanging in", OneTree), 
  SequenceNode("hanging from", OneTree), 
  SequenceNode("hung by", OneTree), 
  SequenceNode("perched in", OneTree));

var SimpleMultiLocation = ChoiceNode(
  SequenceNode("hanging in", TreeGroup), 
  SequenceNode("perched in", TreeGroup));

var PluralLocation = ChoiceNode(
  SequenceNode("hung around", OneTree), 
  SequenceNode("arranged around", OneTree));

var PluralMultiLocation = ChoiceNode(
  SequenceNode("spread through", TreeGroup), 
  SequenceNode("hung through", TreeGroup), 
  SequenceNode("hung throughout", TreeGroup));

var CentralRoom = SequenceNode(
  SequenceNode(PhysicalChamberAdj, ChamberName), 
  IfKeyNode("centralphrase", "t", 
    ChoiceNode("which is", SpecialNode.Comma), "is"), ChamberGloss);

var ViewIntro = AltWeightNode({ node:ViewIntroTerrain, weight:6.000 }, { node:ViewIntroGeneric, weight:1.000 });

var OneWovenOverall = ShuffleNode("shuffle_11", 
  SequenceNode("vines weave through", OverallThemWalls), 
  SequenceNode("tiny", 
    OptNode(0.6000, FlowerColor), "flowers are laced through", OverallThemWalls), 
  SequenceNode(OverallTheWovenWalls, "flutter gently in the wind"), 
  SequenceNode(OverallTheWovenWalls, "creak and shift"), 
  SequenceNode("light pierces", OverallThemWalls, "here and there"), 
  SequenceNode(OverallTheWovenWalls, "are curved surfaces"), 
  "there are no right angles anywhere");

var EngravedDescParenthetical = AltWeightNode({ node:
  SequenceNode(SpecialNode.Comma, EngravedDesc, SpecialNode.Comma), weight:3.000 }, { node:
  SequenceNode("--", EngravedDesc, "--"), weight:1.000 });

var ObservatoryLocale = ChoiceNode(
  SequenceNode("It's", SpecialNode.AAn, TinyObservatoryAdj, "platform, open to the stars, and furnished with", ObservatorySeat, "and", SpecialNode.AAn, 
    ChoiceNode("array", "assembly"), "of", 
    ChoiceNode("curved", "convex", "polished", null, null), 
    ChoiceNode("mirrors", "reflectors", "lenses", "refractors")), 
  SequenceNode("It's", SpecialNode.AAn, TinyObservatoryAdj, "enclosed dome, with", ObservatorySeat, 
    ChoiceNode("set", "positioned"), "below", SpecialNode.AAn, TinyObservatoryAdj, "but", TelescopeAdj, "telescope"), 
  SequenceNode(SpecialNode.AAn, TelescopeAdj, "telescope is set up by", ObservatorySeat), 
  SequenceNode("It's", SpecialNode.AAn, TinyObservatoryAdj, "enclosed dome, gimballed to rotate freely", SpecialNode.Semicolon, SpecialNode.AAn, TinyObservatoryAdj, "but", TelescopeAdj, "telescope is built in"), 
  SequenceNode("It's", SpecialNode.AAn, TinyObservatoryAdj, "sealed room, painted white", SpecialNode.Period, 
    ChoiceNode("light from the stars", "starlight"), 
    ChoiceNode("is focussed through a rooftop aperture", "passes through a lens in the roof", "enters through an aperture overhead"), "and is projected onto the walls"));

var InitDescription = 
  SwitchKeyNode("style", { key:"rough", node:InitDescRough }, { key:"woven", node:InitDescWoven }, { key:"carved", node:InitDescCarved }, { key:"precise", node:InitDescPrecise });

var HerbFollowup = ChoiceNode(HerbFollowup1, HerbFollowup2, 
  SequenceNode(HerbFollowup1, SpecialNode.Period, HerbFollowup2), 
  SequenceNode(HerbFollowup1, SpecialNode.Semicolon, HerbFollowup2));

var PluralStructLocation = ChoiceNode(SimpleLocation, SimpleMultiLocation, PluralLocation, PluralMultiLocation);

var SingleStructLocation = AltWeightNode({ node:SimpleLocation, weight:2.000 }, { node:SimpleMultiLocation, weight:1.000 });

var BookType = ShuffleNode("shuffle_20", 
  SequenceNode(
    OptNode(0.4000, BookAdj), HistoricalCountryAdj, "histories"), 
  SequenceNode(
    ChoiceNode(null, null, "ornate", "hand-colored", "faded"), 
    OptNode(0.7500, HistoricalCountryAdj), "maps"), 
  SequenceNode(
    ChoiceNode("florid", "understated", "baroque", "steamy", "highbrow", "verbose", "terse", "oblique", "obscure", "brusque", "action-packed", "futuristic", "historical"), 
    OptNode(0.5000, HistoricalCountryAdj), "novels"), 
  SequenceNode(
    ChoiceNode("florid", "understated", "baroque", "steamy", "brusque", "action-packed", "futuristic", "historical", "interactive", "pulse-pounding", "tense"), 
    OptNode(0.5000, HistoricalCountryAdj), 
    ChoiceNode("adventures", "adventure stories")), 
  SequenceNode(
    ChoiceNode("florid", "baroque", "steamy", "lurid", "flowery", "angsty", "futuristic", "historical", "preternatural", "explicit"), 
    OptNode(0.5000, HistoricalCountryAdj), "romances"), 
  SequenceNode(
    ChoiceNode("obscure", "occult", "rare", "heavy", "thick"), 
    ChoiceNode("technical references", "reference books", "manuals"), 
    OptNode(0.2500, 
      SequenceNode("from", MythicalCountry))), 
  
    ChoiceNode(
      SequenceNode(AcademicSubject, "textbooks"), 
      SequenceNode("textbooks on", AcademicSubject)), 
  SequenceNode(
    ChoiceNode("hand-written", "untidy", "messy", "faded", "calligraphed"), "manuscripts"), 
  SequenceNode(
    OptNode(0.5000, 
      SequenceNode(BookAdj, SpecialNode.Comma)), 
    ChoiceNode("obscure", "occult", "rare", "arcane", "cryptic", "esoteric", "enigmatic", "opaque", "recondite", "abstruse"), 
    ChoiceNode("tomes", "grimoires", "spellbooks", "grammaries", "symbologies", "lexicons"), 
    OptNode(0.5000, 
      SequenceNode("from", MythicalCountry))));

var LibraryFollowupAll = ChoiceNode(LibraryFollowup, LibraryFollowup, LibraryFollowup2, 
  SequenceNode(LibraryFollowup, SpecialNode.Semicolon, LibraryFollowup2), 
  SequenceNode(LibraryFollowup2, SpecialNode.Comma, "and", LibraryFollowup));

var CentralRoomPhrase = SetKeyNode("centralphrase", "t", CentralRoom);

var CentralRoomSentence = SetKeyNode("centralphrase", "f", CentralRoom);

var OneRoughOverall = ShuffleNode("shuffle_10", 
  SequenceNode(OverallTheWalls, "are", RoughAdj, "but fit tightly"), 
  SequenceNode(OverallTheRoughWalls, "are chinked with", 
    ChoiceNode("moss", "mud", "turf", "moss and mud")), 
  SequenceNode("tiny", 
    OptNode(0.6000, FlowerColor), "flowers bloom in the corners"), 
  SequenceNode("tiny", 
    ChoiceNode("rivulets", "droplets"), "of water glisten on", OverallThemWalls), 
  SequenceNode(OverallTheRoughWalls, "are splintery"), 
  SequenceNode(ShortRoughAdj, 
    ChoiceNode("knots", "burls"), "jut from", OverallThemWoodenWalls));

var CarvedPatterns = SequenceNode(
  ChoiceNode(CarvedLines, CarvedMandalas, CarvedSpecials), 
  OptNode(0.5000, CarvedPigment));

var WritingRoom = SequenceNode(RoomRelativeDir, SetRoomRelation, 
  ChoiceNode(
    SequenceNode("is the", WritingRoomWord, "where I", 
      OptNode(0.5000, "go to"), "write"), 
    SequenceNode("is a writing", WritingNookWord), 
    SequenceNode("is a", WritingRoomWord, "set aside for", 
      OptNode(0.5000, "my"), "writing")), 
  ChoiceNode(
    SequenceNode(SpecialNode.Period, WritingDesk, SpecialNode.Comma, "and", "the", 
      ChoiceNode("space", "area"), "is", WritingTextures), 
    SequenceNode(SpecialNode.Semicolon, "it is", WritingTextures, SpecialNode.Period, WritingDesk), 
    SequenceNode(SpecialNode.Period, LibraryFollowup, SpecialNode.Comma, "and it is", WritingTextures, SpecialNode.Period, WritingDesk), 
    SequenceNode(SpecialNode.Semicolon, "it is", WritingTextures, SpecialNode.Comma, "and", WritingDesk), 
    SequenceNode(SpecialNode.Semicolon, "it is", WritingTextures, SpecialNode.Comma, "and", LibraryFollowup, SpecialNode.Period, WritingDesk), 
    SequenceNode(SpecialNode.Comma, WritingRoomSpace, WritingTextures, SpecialNode.Period, WritingDesk), 
    SequenceNode(SpecialNode.Comma, WritingRoomSpace, WritingTextures, SpecialNode.Period, WritingDesk, SpecialNode.Comma, "and", LibraryFollowup2)), 
  OptNode(0.5000, 
    SequenceNode(SpecialNode.Period, WritingFollowup)));

var PoweredAttr = SequenceNode(SetAttrRelation, 
  ChoiceNode(
    SequenceNode(SpecialNode.AAn, TinyObservatoryAdj, 
      ChoiceNode("diesel", "electric"), "generator supplies power", 
      OptNode(0.5000, 
        SequenceNode("to the", PoweredPlace)), SpecialNode.Period, "it", 
      ChoiceNode("rests", "stands", "sits"), PowerLocationDesc), 
    SequenceNode("the", PoweredPlaceSing, "is powered by", SpecialNode.AAn, 
      OptNode(0.6000, TinyObservatoryAdj), 
      ChoiceNode("iron", "cast-iron", "brass", "nickel-plated", null, null), "steam boiler", SpecialNode.Comma, 
      ChoiceNode("clanking", "hissing", "rattling", "which clanks", "which hisses", "which rattles"), 
      ChoiceNode("merrily away", "cheerily", "cheerfully"), PowerLocationDesc), 
    SequenceNode(SpecialNode.AAn, 
      ChoiceNode("wood-burning", "coal-burning", "peat-burning"), "stove", 
      ChoiceNode("rests", "stands", "sits"), PowerLocationDesc, 
      ChoiceNode(
        SequenceNode(SpecialNode.Comma, "keeping the", PoweredPlace, "warm", SpecialNode.Period, "hot air passes"), 
        SequenceNode(SpecialNode.Period, "it warms the", PoweredPlace, SpecialNode.Comma, "pushing hot air")), "through", 
      ChoiceNode(null, null, "unobtrusive", "hidden", "narrow"), "ducts throughout the treehouse"), 
    SequenceNode("the", PoweredPlaceSing, "draws", 
      ChoiceNode("its", "all its", null), "power from the earth", SpecialNode.Period, SpecialNode.AAn, "geothermal tap is immersed in", SpecialNode.AAn, 
      ChoiceNode("seeping", "steaming", "trickling", null, null), "hot spring", 
      OptNode(0.5000, SpecialNode.Comma), 
      ChoiceNode("far below the surface", "downslope", "a few minutes away", "in a tiny cave below the roots")), 
    ChoiceNode(
      SequenceNode(
        ChoiceNode("solar", "photoelectric"), 
        ChoiceNode("cells", "panels"), "are strung along the tree branches, supplying me with", 
        ChoiceNode("light and battery power", "power for the storage cells", "power", "all my power")), 
      SequenceNode("the", PoweredPlaceSing, "is powered by", 
        ChoiceNode("solar", "photoelectric"), 
        ChoiceNode("cells", "panels"), 
        ChoiceNode(
          SequenceNode(SpecialNode.Comma, "strung along the branches"), 
          SequenceNode(SpecialNode.Comma, "which are placed carefully in the treetops"), "wired to the roof")), 
      SequenceNode("the", PoweredPlaceSing, "is powered by", 
        ChoiceNode("raincatchers that funnel water down through the branches past tiny turbines", "tiny turbines that catch rain funneled down through the branches")), 
      ChoiceNode(
        SequenceNode(PowerFlowers, "collect sunlight and convert it to electricity"), 
        SequenceNode("sunlight is collected by", PowerFlowers, "and converted to electricity for me"), 
        SequenceNode("my power comes from", PowerFlowers, SpecialNode.Comma, "which collect sunlight and convert it to electricity"))), PoweredPerTerrain), 
  OptNode(0.1000, 
    SequenceNode(SpecialNode.Period, 
      ChoiceNode("as a backup", "in case of emergency", "if that fails"), SpecialNode.Comma, PoweredFollowup)));

var RealHerbRoom = SequenceNode(RoomRelativeDir, SetRoomRelation, "is", 
  ChoiceNode(SpecialNode.AAn, "the"), 
  ChoiceNode(
    SequenceNode(SpecialNode.AnForm, "herb room"), "stillroom"), 
  ChoiceNode(
    SequenceNode(SpecialNode.Comma, "where bundles of", Herbs, "and", Herbs, "are hanging to dry"), 
    SequenceNode("filled with", Herbs, "that I've gathered", 
      SwitchKeyNode("terrain", { key:"forest", node:"in the woods" }, { key:"river", node:"by the shore" }, { key:"swamp", node:"by the water" }, { key:"mountain", node:"on the slopes" }, { node:"nearby" })), 
    SequenceNode(SpecialNode.Period, "the worktable is piled with", Herbs, "and", Herbs, "that I've gathered"), 
    SequenceNode(SpecialNode.Period, "it is stacked with dried", Herbs, SpecialNode.Comma, Herbs, SpecialNode.Comma, "and", Herbs), 
    SequenceNode(SpecialNode.Period, "the", Herbs, "is in and ready to store, but I need to make room for the", Herbs)), SpecialNode.Period, HerbFollowup);

var CarvedEntrance = ChoiceNode(
  SequenceNode(SpecialNode.AAn, 
    ChoiceNode("low", "tall", "wide", "broad", "narrow"), Doorway, LeadsTo), 
  SequenceNode("behind", SpecialNode.AAn, 
    ChoiceNode("low", "tall", "wide", "broad", "narrow", "carved", "engraved"), Doorway, "is"), 
  SequenceNode(SpecialNode.AAn, "row of", RoughBeams, EngravedDescParenthetical, LeadsTo), 
  SequenceNode(SpecialNode.AAn, Doorway, EngravedDescParenthetical, LeadsTo), 
  SequenceNode(SpecialNode.AAn, 
    ChoiceNode("passage", "hall", "hallway"), EngravedDescParenthetical, LeadsTo), 
  SequenceNode(SubjCarvings, 
    ChoiceNode("line", "fill", "cover"), SpecialNode.AAn, 
    ChoiceNode("passage", "hall", "hallway"), "that", LeadsTo), 
  SequenceNode(DescCarvings, 
    ChoiceNode("line", "fill", "cover"), "the", 
    ChoiceNode("passage", "hall", "hallway"), "that", LeadsTo));

var WovenOverall = ChoiceNode(OneWovenOverall, 
  SequenceNode(OneWovenOverall, SpecialNode.Comma, "and", OneWovenOverall), 
  SequenceNode(OneWovenOverall, SpecialNode.Semicolon, OneWovenOverall));

var LumberStuffTrash = SequenceNode(
  SetKeyNode("stuffvalue", "low"), 
  AltWeightNode({ node:
    SequenceNode(
      ChoiceNode(
        SequenceNode(
          ChoiceNode("random", "oddly-shaped"), 
          ChoiceNode("bits", "scraps"), "of", LumberSubstance), 
        SequenceNode("empty", 
          ChoiceNode("boxes and cartons", "boxes", "cartons")), 
        SequenceNode("scrap", LumberSubstance), 
        SequenceNode(LumberLeftover, "paint cans"), 
        SequenceNode(LumberLeftover, "rolls of wrapping paper"), "wire and string", "rags and old clothes", 
        SequenceNode(
          ChoiceNode("old", "antique", "obsolete", null), "computer motherboards"), 
        SequenceNode(
          ChoiceNode("burned-out", "dismantled", null, null), 
          ChoiceNode("stepper motors", "motor actuators"))), 
      OptNode(0.5000, 
        ChoiceNode(
          SequenceNode(SpecialNode.Comma, LumberStuffExtra, SpecialNode.Comma), 
          SequenceNode("(", SpecialNode.Concat, LumberStuffExtra, SpecialNode.Concat, ")")))), weight:5.000 }, { node:
    SequenceNode(LumberStuffJunk, "and", LumberStuffJunk), weight:1.000 }, { node:
    SequenceNode(LumberStuffJunk, SpecialNode.Comma, LumberStuffJunk, SpecialNode.Comma, 
      ChoiceNode("and I don't even know what else", "and who knows what else", "and more", "and other things")), weight:1.000 }));

var ObservatoryRoom = SequenceNode(SpecialNode.AAn, 
  OptNode(0.6000, TinyObservatoryAdj), "observatory", "is", RoomRelativeDir, SetRoomRelation, SpecialNode.Period, ObservatoryLocale, SpecialNode.Period, ObservatoryFollowup, 
  OptNode(0.5000, 
    SequenceNode(SpecialNode.Period, ObservatoryFollowup)));

var HerbRoom = IfKeyNode("terrain", "savannah", SavannahFossils, RealHerbRoom);

var BookPiles = ChoiceNode(
  SequenceNode(BookType, "are piled everywhere"), 
  SequenceNode(BookType, "are neatly shelved there"), 
  SequenceNode(BookType, "and", BookType, "lie in stacks"));

var LadderFollowup = ChoiceNode(
  SequenceNode("I can also lower", 
    ChoiceNode(null, "things in"), "a bucket"), 
  SequenceNode("I've planted thorn bushes around the base of the tree", 
    OptNode(0.5000, 
      SequenceNode(SpecialNode.Comma, "to keep away bears", 
        OptNode(0.5000, 
          SequenceNode(SpecialNode.Period, "I've never seen a bear, but one never knows"))))), 
  SequenceNode("a plaque", 
    ChoiceNode("on", "screwed to", "hanging on"), 
    ChoiceNode("the trunk", "the tree trunk", "the tree's trunk"), "displays", 
    ChoiceNode(
      SequenceNode("my name", "as well as", PlaqueItem), 
      SequenceNode(PlaqueItem, SpecialNode.Comma, PlaqueItem, SpecialNode.Comma, "and", "my name"))), 
  SequenceNode(
    ChoiceNode("protective", "defensive", null), 
    ChoiceNode("charms and fetishes", "charms", "fetishes", "amulets"), "are posted on a stake nearby"), 
  SequenceNode("I can also", 
    ChoiceNode("parachute", "abseil"), "out if necessary"), 
  SequenceNode(
    ChoiceNode("however,", "anyhow,", "but"), "you'll never find the place unless you know exactly where it is"));

var Entrance = SwitchKeyNode("style", { key:"rough", node:RoughEntrance }, { key:"woven", node:WovenEntrance }, { key:"carved", node:CarvedEntrance }, { key:"precise", node:PreciseEntrance });

var RoughOverall = ChoiceNode(OneRoughOverall, 
  SequenceNode(OneRoughOverall, SpecialNode.Comma, "and", OneRoughOverall), 
  SequenceNode(OneRoughOverall, SpecialNode.Semicolon, OneRoughOverall), 
  SequenceNode(OneRoughOverall, SpecialNode.Semicolon, SpecialNode.AAn, RoughAdj, Doorway, "leads", 
    ChoiceNode("within", "inside", "in")));

var OneCarvedOverall = ChoiceNode(
  SequenceNode(CarvedPatterns, "give the structure", SpecialNode.AAn, CarvedQuality), 
  SequenceNode("the walls are", 
    ChoiceNode("traced", "covered"), "with", CarvedPatterns), 
  SequenceNode(SpecialNode.AAn, "frieze of", 
    OptNode(0.4000, PigmentColor), 
    OptNode(0.5000, FiguresAdj), FiguresNoun, "gives the structure", SpecialNode.AAn, CarvedQuality), 
  SequenceNode(CarvingDesc, 
    OptNode(0.3000, PigmentColor), Carvings, "are visible here and there"), 
  SequenceNode(SubjCarvings, "are visible here and there", 
    OptNode(0.3000, 
      SequenceNode(SpecialNode.Comma, "drawn in", PigmentColor))));

var LumberStuff = AltWeightNode({ node:LumberStuffHigh, weight:1.000 }, { node:LumberStuffTrash, weight:2.000 });

var Overall = SwitchKeyNode("style", { key:"rough", node:RoughOverall }, { key:"woven", node:WovenOverall }, { key:"carved", node:OneCarvedOverall }, { key:"precise", node:PreciseOverall });

var ViewAttr = SequenceNode(SetAttrRelation, 
  ChoiceNode(
    SequenceNode(
      OptNode(0.6600, 
        SequenceNode(ViewIntro, SpecialNode.Period)), ViewPreAspect, ViewMain), 
    SequenceNode(ViewPreAspect, ViewMain, 
      OptNode(0.6600, 
        SequenceNode(SpecialNode.Period, ViewIntro)))));

var LibraryRoom = SequenceNode(RoomRelativeDir, SetRoomRelation, 
  OptNode(0.2500, 
    SequenceNode(SpecialNode.Comma, RoomEntrance, SpecialNode.Comma)), 
  ChoiceNode(
    SequenceNode("is", "my library", SpecialNode.Period, BookPiles), 
    SequenceNode("is", "where I keep my books", SpecialNode.Period, BookPiles), 
    SequenceNode("is", SpecialNode.AAn, PhysicalChamberAdj, "room", 
      ChoiceNode("stacked", "filled", "packed"), "with books", SpecialNode.Period, 
      ChoiceNode(
        SequenceNode(BookType, "are everywhere"), 
        SequenceNode(BookType, "lie everywhere"), 
        SequenceNode(BookType, "are mixed with", BookType), 
        SequenceNode(BookType, "and", BookType, "are everywhere"))), 
    SequenceNode("is", SpecialNode.AAn, PhysicalChamberAdj, "library of books I've cached", SpecialNode.Period, 
      ChoiceNode(
        SequenceNode(BookType, "are everywhere"), 
        SequenceNode(BookType, "lie everywhere"), 
        SequenceNode(BookType, "are mixed with", BookType), 
        SequenceNode(BookType, "and", BookType, "are everywhere"))), 
    SequenceNode("is a room", 
      ChoiceNode("overflowing", "filled", "packed"), "with", StyleBookshelves, SpecialNode.Period, "rows of", BookType, "and", BookType, "lean against", BookType)), 
  OptNode(0.7500, 
    SequenceNode(SpecialNode.Period, LibraryFollowupAll)));

var LadderAttr = SequenceNode(SetAttrRelation, 
  OptNode(0.6000, 
    SequenceNode(LadderIntro, SpecialNode.Period)), 
  ChoiceNode(
    SequenceNode(SpecialNode.AAn, 
      ChoiceNode(
        SequenceNode(
          ChoiceNode("heavy", "thick", "rough"), "rope ladder"), 
        SequenceNode("rope ladder of", 
          ChoiceNode("heavy", "thick", "rough"), 
          ChoiceNode("jute", "knots"))), 
      ChoiceNode("leads", "runs"), "down the", 
      ChoiceNode("tree", "trunk", "tree trunk")), 
    SequenceNode(SpecialNode.AAn, 
      ChoiceNode(
        SequenceNode(
          ChoiceNode("rough", "shaky", "crude"), 
          OptNode(0.5000, "wooden"), "ladder"), 
        SequenceNode("ladder of", 
          ChoiceNode("heavy", "thick", "rough"), 
          OptNode(0.5000, "wooden"), 
          ChoiceNode("stakes", "pegs", "boards"))), 
      ChoiceNode("leads", "runs"), "down the", 
      ChoiceNode("tree", "trunk", "tree trunk")), 
    SequenceNode(SpecialNode.AAn, 
      ChoiceNode("small", "small but powerful", "handy", "sturdy", "jury-rigged"), 
      ChoiceNode("windlass", "pulley system", "system of pulleys", "winch"), "allows me to", 
      ChoiceNode("lower", "raise and lower"), "a platform to", 
      ChoiceNode("ground level", "the ground")), 
    SequenceNode(SpecialNode.AAn, 
      ChoiceNode("elevator", "dumbwaiter"), "is built into the trunk of the tree", SpecialNode.Period, "it's", 
      ChoiceNode("not very large", "cramped", "small"), SpecialNode.Comma, "but", 
      ChoiceNode("it lets me get", "it moves me", "it goes", "it travels"), "up and down", 
      ChoiceNode("easily", "easily enough", "without too much trouble")), 
    SequenceNode(SpecialNode.AAn, 
      ChoiceNode("beautifully engineered", "well-balanced", "lovely", "delightful"), "spiral staircase", 
      ChoiceNode("leads", "runs"), 
      ChoiceNode("around", "along"), "the", 
      ChoiceNode("tree", "trunk", "tree trunk"), 
      ChoiceNode(null, "from top to bottom", 
        SequenceNode(SpecialNode.Comma, "all the way up")))), 
  OptNode(0.6000, 
    SequenceNode(SpecialNode.Period, LadderFollowup)));

var FirstRoom = SequenceNode("my secret hideout is", 
  IdleNode(1), SetTerrain, SetStyle, InitDescription, 
  IfKeyNode("pluralstructure", "p", PluralStructLocation, SingleStructLocation), SpecialNode.Period, SetRoomRelation, 
  AltWeightNode({ node:
    SequenceNode(Entrance, SpecialNode.AAn, CentralRoomPhrase), weight:2.000 }, { node:
    SequenceNode(Overall, SpecialNode.Period, "The", CentralRoomSentence), weight:1.000 }));

var LumberRoom = SequenceNode(RoomRelativeDir, SetRoomRelation, 
  SetKeyNode("stuffvalue", ""), "is", SpecialNode.AAn, 
  ChoiceNode("storage room", "storeroom", "room", "closet", "alcove", "storage space"), 
  ChoiceNode(
    SequenceNode(
      ChoiceNode(
        SequenceNode("where I keep", LumberStuff), 
        SequenceNode("full of", LumberStuff), 
        SequenceNode("filled with", LumberStuff), 
        SequenceNode("with", LumberStuff, "scattered everywhere")), 
      OptNode(0.5000, 
        SequenceNode(SpecialNode.Period, LumberFollowup))), 
    SequenceNode(
      ChoiceNode(
        SequenceNode(SpecialNode.Period, LumberFollowup, SpecialNode.Period), 
        SequenceNode(SpecialNode.Semicolon, LumberFollowup, SpecialNode.Period), 
        SequenceNode(SpecialNode.Period, LumberFollowup, SpecialNode.Semicolon)), 
      ChoiceNode(
        SequenceNode("the room is full of", LumberStuff), 
        SequenceNode("the room is filled with", LumberStuff), 
        SequenceNode("I can see", LumberStuff), 
        SequenceNode("I've got", LumberStuff)))), 
  OptNode(0.3000, 
    SequenceNode(SpecialNode.Period, LumberJudgement)));

var NextRoom = ShuffleNode("shuffle_40", LibraryRoom, ObservatoryRoom, WritingRoom, HerbRoom, LumberRoom, PoweredAttr, LadderAttr, ViewAttr);

var RootNode = IfKeyNode("isfirst", "t", NextRoom, 
  SetKeyNode("isfirst", "t", FirstRoom));

return RootNode;
}
