let arr = [
"Fire Emblem: Genealogy of the Holy War",
"Fire Emblem: Thracia 776",
"Fire Emblem: The Binding Blade",
"Fire Emblem: The Blazing Blade",
"Fire Emblem: The Sacred Stones",
"Fire Emblem: Path of Radiance",
"Fire Emblem: Radiant Dawn",
"Fire Emblem: Shadow Dragon",
"Fire Emblem: New Mystery of the Emblem",
"Fire Emblem: Awakening",
"Fire Emblem: Fates",
"Fire Emblem: Fates (Revelation)",
"Fire Emblem: Fates (Birthright)",
"Fire Emblem: Fates (Conquest)",
"Fire Emblem Echoes: Shadows of Valentia",
"Fire Emblem: Three Houses",
"Fire Emblem Heroes",
"Magia Record",
"Xenoblade Chronicles",
"Misc."
]


function generateTitles(){

	console.log(title)

	for (let i = 0; i < arr.length; i++){
		console.log(arr[i])
		document.getElementById(arr[i]).innerHTML = title[arr[i]].join('<br>')
	}
}