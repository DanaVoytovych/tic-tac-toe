// "x", first player move
// "o", second player move
var activeState = "";

function startGame() {
	var gameBoard = document.getElementById("game-board");
	gameBoard.style.display = "block";
	gameBoard.innerHTML = "";
	// create game field
	for (var i = 0; i < 9; i++) {
		var rect = document.createElement("div");
		rect.className = "rect";
		rect.onclick = doStep;
		rect.setAttribute("index", i);
		gameBoard.appendChild(rect);
		cellState[i] = "";
	}
	activeState = "x";
}

// selected cells states
var cellState = new Array(9);

function doStep () {
	var i = this.getAttribute("index");
	if (activeState == "x") {
		this.innerHTML = "x";
		activeState = "o";
		cellState[i] = "x"; 
	} else {
		this.innerHTML = "o";
		activeState = "x";
		cellState[i] = "o";
	}
	this.onclick = null;
	this.style.cursor = "default";
	var res = isFinaleMove();
	if (res == "x") {
		alert("First Player Wins!");
	} else if (res == "o") {
		alert("Second Player Wins!");	
	} else if (res == "+") {
		alert("Game Over!");
	}
}

function isFinaleMove () {
	// check rows
	if (cellState[0] != 0 && (cellState[0] == cellState[1] && cellState[1] == cellState[2])) {
		return cellState[0];
	}
	if (cellState[3] != 0 && (cellState[3] == cellState[4] && cellState[4] == cellState[5])) {
		return cellState[3];
	}
	if (cellState[6] != 0 && (cellState[6] == cellState[7] && cellState[7] == cellState[8])) {
		return cellState[6];
	}
	if (cellState[0] != 0 && (cellState[0] == cellState[3] && cellState[3] == cellState[6])) {
		return cellState[0];
	}
	if (cellState[1] != 0 && (cellState[1] == cellState[4] && cellState[4] == cellState[7])) {
		return cellState[1];
	}
	if (cellState[2] != 0 && (cellState[2] == cellState[5] && cellState[5] == cellState[8])) {
		return cellState[2];
	}
	if (cellState[0] != 0 && (cellState[0] == cellState[4] && cellState[4] == cellState[8])) {
		return cellState[0];
	}
	if (cellState[2] != 0 && (cellState[2] == cellState[4] && cellState[4] == cellState[6])) {
		return cellState[2];
	}
	for (var i = 0; i < cellState.length; i++) {
		if (cellState[i] == "") {
			return "";
		}
	}
	return "+";
}