const container = document.querySelector(".container");

const reset_btn = document.createElement("button");
reset_btn.setAttribute("id", "reset-button");
container.appendChild(reset_btn);
reset_btn.textContent = "Reset";

const grid = document.createElement("div");
grid.setAttribute("class", "grid");
container.appendChild(grid);

// creates 16 lines of squares
for (let i = 0; i < 16; i++){
    const line = document.createElement("div");
    line.setAttribute("class", "line");
    for(let j = 0; j < 16; j++){
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        line.appendChild(square);
    }
    grid.appendChild(line);
}
squares = document.querySelectorAll(".square");
    for (var i = 0; i < squares.length; i++) {
        hoverEffect(squares[i]);
    }


// if the button is not clicked
reset_btn.addEventListener("click", () => {
    const input = Number(window.prompt("Enter the number of squares: "));
    reshape(input);
    })

function reshape(N) {
    const lines = document.querySelectorAll(".line");
    var linesNumber = lines.length;
    
    for (var i=0; i < linesNumber; i++){
        while (lines[i].firstChild) {
            lines[i].removeChild(lines[i].firstChild);
        }
        grid.removeChild(lines[i])
    }

    for (let i = 0; i < N; i++){
        const line = document.createElement("div");
        line.setAttribute("class", "line");
        for(let j = 0; j < N; j++){
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            line.appendChild(square);
        }
        grid.appendChild(line);
    }
    squares = document.querySelectorAll(".square");
    for (var i = 0; i < squares.length; i++) {
        hoverEffect(squares[i]);
    }
}

function hoverEffect(node){
    node.addEventListener("mousemove", () => {
        node.setAttribute("style", "background-color: #A2A392");
    })
}


