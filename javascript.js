alert (titles.back);

function newQuote() {
	let index = Math.floor(Math.random() * 245)+1;
	document.getElementById('quoteDisplay').innerHTML = titles[index].body + '<br>';
	document.getElementById('sourceImage').src = 'logos/' + titles[index].filename;
	document.getElementById('sourceImage').alt = titles[index].source;
}

function buttonSound() {
	if (document.getElementById("bg_music").paused)
	document.getElementById("click").play();
}

function toggle(){
	music = document.getElementById("bg_music")
	if (!music.paused){
		music.pause();
		document.getElementById("toggle").src = "buttons/play.png";

	}
	else {
		music.play();
		document.getElementById("toggle").src = "buttons/pause.png";
	}
	
}







