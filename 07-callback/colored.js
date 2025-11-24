function amazing(paintCallback) {
	const paintedColor = paintCallback("Red", "Green", "Blue");
	console.log("Painted Color: " + paintedColor);
}

function colored(c1, c2, c3){
	let arr = [c1 , c2 , c3] 
	let i = Math.floor(Math.random()*3)
	document.body.style.backgroundColor = arr[i] 
}
amazing(colored)
