alert (titles.back);

function newQuote() {
	let index = Math.floor(Math.random() * 245)+1;
	document.getElementById('quoteDisplay').innerHTML = titles[index].body + '<br>';
	document.getElementById('sourceImage').src = 'logos/' + titles[index].filename;
	document.getElementById('sourceImage').alt = titles[index].source;
}

function buttonSound() {
	document.getElementById("click").play();
}






