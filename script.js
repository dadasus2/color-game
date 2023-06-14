function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createSquares() {

    const color = getRandomColor();

    const container = document.querySelector(".container");
    const uniqueSquare = document.createElement("div");
    const randomOrder = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    uniqueSquare.classList.add("square", "unique");
    uniqueSquare.style.backgroundColor = getRandomColor();
    uniqueSquare.style.order = randomOrder
    container.appendChild(uniqueSquare);



    for (let i = 0; i < 8; i++) {

        var square = document.createElement("div");
        square.classList.add("square");
        square.style.backgroundColor = color;
        square.style.order = Math.floor(Math.random() * 8) + 1
        container.appendChild(square);
        square.addEventListener('click', () => {
            clickNormal()
        })
    }

    const unique = document.querySelector('.unique')

    unique.addEventListener('click', () => {
        clickUnique()
    })

}

function clickUnique() {
    var squares = document.querySelectorAll('.square')
    squares.forEach(squari => {
        squari.remove()
    });
    countScore()
    createSquares()
}

let scoreCount = 0
function countScore() {
    scoreCount++
    updateScore()
}

function clickNormal() {
    var squares = document.querySelectorAll('.square')
    squares.forEach(squari => {
        squari.remove()
    });
    scoreCount = 0
    updateScore()
    createSquares()
}

function updateScore() {
    var score = document.querySelector('.counter')
    score.textContent = scoreCount
}




