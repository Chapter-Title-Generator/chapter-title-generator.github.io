alert (titles.back);

function newQuote() {
	let index = Math.floor(Math.random() * 245)+1;
	document.getElementById('quoteDisplay').innerHTML = titles[index].body + '<br>';

	//document.getElementById('img').innerHTML = `<img src='${titles[index].filename}' alt='${titles[index].source}'/>`
	
	document.getElementById('sourceImage').src = 'logos/' + titles[index].filename;

	document.getElementById('sourceImage').alt = titles[index].source;

	

}



//"<img src='${filename}' alt=${titles[index].source}/>"

//document.addEventListener('DOMContentLoaded', newQuote() {
//    alert("Ready!");
//});







