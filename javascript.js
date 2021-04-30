alert (titles.back);
alert (music.back);

var music_index;

function newQuote() {
	let index = Math.floor(Math.random() * 266)+1;
	document.getElementById('quoteDisplay').innerHTML = titles[index].body + '<br>';
	document.getElementById('sourceImage').src = 'logos/' + titles[index].filename;
	document.getElementById('sourceImage').alt = titles[index].source;
}

function buttonSound() {
	if (document.getElementById("bg_music").paused)
	document.getElementById("click").play();
}

function toggle(){
	bg_audio = document.getElementById("bg_music")
	//bg_music.volume = 0.2;
	if (!bg_audio.paused){
		bg_audio.pause();
		document.getElementById("toggle").src = "buttons/play.png";
	}
	else {
		bg_audio.volume = .2;
		bg_audio.loop = true;
		bg_audio.play();
		document.getElementById("toggle").src = "buttons/pause.png";
	}
}

function setMusic(load){
	if(load){
		music_index = Math.floor(Math.random()*4)+1;
	} 
	let track = music[music_index];
	document.getElementById("cover").src = "covers/" + track.cover;
	document.getElementById("bg_music").src = "music/" + track.filepath;
	document.getElementById("song_title").innerHTML = track.title;
}

function changeSong(next) {
	if(next){
		music_index == 4 ? music_index = 1 : music_index++;
	}
	else {
		music_index == 1 ? music_index = 4 : music_index--;
	}
	document.getElementById("bg_music").pause()
	document.getElementById("toggle").src = "buttons/play.png";
	setMusic(false);
}







