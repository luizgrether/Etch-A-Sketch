let boardSize = 32;
const board = document.querySelector(".grid-container");
let rainbowMode = false;
let eraserMode = false;

function displayBoard(size, rainbowCheck, eraserCheck) {
  let boardSize = size;
  const count = size * size;
  const divSize = 500 / size + "px";

  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    board.style.setProperty("--boardSize", boardSize);
    board.style.setProperty("--divSize", divSize);
    board.appendChild(div);
  }

  paintDivs(rainbowCheck, eraserCheck);
}

function paintDivs(rainbowCheck, eraserCheck) {
  const divs = document.querySelectorAll(".grid-item");
  const rainbowOn = rainbowCheck;
  const eraserOn = eraserCheck;
  if (rainbowOn == true) {
    divs.forEach((div) => {
      div.addEventListener("mouseover", () => {
        div.style.setProperty("background-color", getRandomColor());
      });
    });
  } else if (rainbowOn == false) {
    divs.forEach((div) => {
      div.addEventListener("mouseover", () => {
        div.style.setProperty("background-color", "black");
      });
    });
  }

  if (eraserOn == true) {
    divs.forEach((div) => {
      div.addEventListener("mouseover", () => {
        div.style.setProperty("background-color", "#f2f2f2");
      });
    });
  }
}

function resetBoard() {
  const deleteDivs = document.querySelectorAll(".grid-item");
  deleteDivs.forEach((div) => {
    board.removeChild(div);
  });
}

function clearBoard() {
  const clear = document.querySelectorAll(".grid-item");
  clear.forEach((div) => {
    div.style.setProperty("background-color", "#f2f2f2");
  });
}

function getRandomColor() {
  const colors = ["#9400D3", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000"];
  let color = colors[Math.floor(Math.random() * colors.length)];
  return color;
}

const smaller = document.querySelector(".smaller");
smaller.addEventListener("click", function () {
  if (boardSize > 2){
    resetBoard();
    boardSize -= 2;
    displayBoard(boardSize, rainbowMode);
  }
});

const bigger = document.querySelector(".bigger");
bigger.addEventListener("click", function () {
  if (boardSize < 150){
    resetBoard();
    boardSize += 2;
    displayBoard(boardSize, rainbowMode);
  }
});

const rainbow = document.querySelector(".rainbow-mode");
rainbow.addEventListener("click", () => {
  rainbow.classList.toggle("rainbow-on");
  rainbowMode = !rainbowMode;
  paintDivs(rainbowMode, eraserMode);
});

const eraser = document.querySelector(".eraser-mode");
eraser.addEventListener("click", () => {
  eraser.classList.toggle("eraser-on");
  eraserMode = !eraserMode;
  paintDivs(rainbowMode, eraserMode);
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  clearBoard();
});

displayBoard(boardSize, rainbowMode, eraserMode);
