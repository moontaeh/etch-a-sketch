const grid = document.querySelector("#container");

const generateGrid = () => {

    for(let i = 0; i < 16; i++){
        const col = document.createElement("div");

        for(let j = 0; j < 16; j++){
            const square = document.createElement("div");
            square.classList.add("grid-item");

            col.appendChild(square);
        }

        grid.appendChild(col);
    }
}

generateGrid();

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach(gridItem => {
    gridItem.addEventListener("mouseover", () => {
        const rndmRed = Math.random() * 256;
        const rndmGreen = Math.random() * 256;
        const rndmBlue = Math.random() * 256;

        gridItem.setAttribute("style", `background-color: rgb(${rndmRed}, ${rndmGreen}, ${rndmBlue})`);
    })
});
