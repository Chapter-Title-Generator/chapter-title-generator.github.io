let fs = require('fs');

let fe4 = fs.readFileSync('genealogy.txt').toString().split("\n");
let fe5 = fs.readFileSync('t776.txt').toString().split("\n");
let fe6 = fs.readFileSync('fe6.txt').toString().split("\n");
let fe7 = fs.readFileSync('fe7.txt').toString().split("\n");
let fe8 = fs.readFileSync('fe8.txt').toString().split("\n");
let fe9 = fs.readFileSync('por.txt').toString().split("\n");
let fe10 = fs.readFileSync('rd.txt').toString().split("\n");
let fe11 = fs.readFileSync('sd.txt').toString().split("\n");
let fe12 = fs.readFileSync('new_mystery.txt').toString().split("\n");
let fe13 = fs.readFileSync('fe13.txt').toString().split("\n");
let fe14 = fs.readFileSync('fates.txt').toString().split("\n");
let fe_rev = fs.readFileSync('revelations.txt').toString().split("\n");
let fe_br = fs.readFileSync('birthright.txt').toString().split("\n");
let fe_cq = fs.readFileSync('conquest.txt').toString().split("\n");
let fe15 = fs.readFileSync('sov.txt').toString().split("\n");
let fe16 = fs.readFileSync('3h.txt').toString().split("\n");
let feh = fs.readFileSync('feh.txt').toString().split("\n");

let game_array = [fe4, fe5, fe6, fe7, fe8, fe9, fe10, fe11, fe12, fe13, fe14, fe_rev, fe_br, fe_cq, fe15, fe16, feh]
let source_array = ["Fire Emblem: Genealogy of the Holy War", 
					"Fire Emblem: Thracia 776",
					"Fire Emblem: The Binding Blade",
					"Fire Emblem: The Blazing Blade",
					"Fire Emblem: The Sacred Stones",
					"Fire Emblem: Path of Radiance",
					"Fire Emblem: Radiant Dawn",
					"Fire Emblem: Shadow Dragon",
					"Fire Emblem: New Mystery of the Emblem",
					"Fire Emblem: Awakening",
					"Fire Emblem Fates",
					"Fire Emblem Fates: Revelation",
					"Fire Emblem Fates: Birthright",
					"Fire Emblem Fates: Conquest",
					"Fire Emblem Echoes: Shadows of Valentia",
					"Fire Emblem: Three Houses",
					"Fire Emblem Heroes"
					]

let files_array = ["genealogy.png", 
					"thracia776.png",
					"binding.png",
					"blazing.png",
					"sacred_stones.png",
					"por.png",
					"rd.png",
					"sd.png",
					"new_mystery.png",
					"awakening.png",
					"fates.png",
					"revelation.png",
					"birthright.png",
					"conquest.png",
					"sov.png",
					"3h.png",
					"heroes.png"
					]


let object = {
	[source_array[0]] : fe4,
	[source_array[1]] : fe5,
	[source_array[2]] : fe6,
	[source_array[3]] : fe7,
	[source_array[4]] : fe8,
	[source_array[5]] : fe9,
	[source_array[6]] : fe10,
	[source_array[7]] : fe11,
	[source_array[8]] : fe13,
	[source_array[9]] : fe14,
	[source_array[10]] : fe_rev,
	[source_array[11]] : fe_br,
	[source_array[12]] : fe_cq,
	[source_array[13]] : fe15,
	[source_array[14]] : fe16,
	[source_array[15]] : feh,

}

/*

let object = {};

let i = 1;

for (let j = 0; j < game_array.length; j++){
	let game = game_array[j];
	let source = source_array[j];
	let filename = files_array[j];

	for (let k = 0; k < game.length; k++){
		let tempobject = {
			"body" : game[k],
			"source" : source,
			"filename" : filename
		}
		object[i] = tempobject;
		i++;
	}
}

*/


let jsonstring = JSON.stringify(object)
fs.writeFileSync('./sorted.json', jsonstring)
