const DEFAULT_GRID_SIZE = 16;

const generateGrid = (size) => {

    const grid = document.querySelector("#container");

    for(let i = 0; i < size; i++){
        const col = document.createElement("div");

        for(let j = 0; j < size; j++){
            const square = document.createElement("div");
            square.classList.add("grid-item");

            col.appendChild(square);
        }

        grid.appendChild(col);
    }
    console.log("First grid:",grid);

}

const bindElements = () => {
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach(gridItem => {
        gridItem.addEventListener("mouseover", () => {
            const rndmRed = Math.random() * 256;
            const rndmGreen = Math.random() * 256;
            const rndmBlue = Math.random() * 256;
    
            gridItem.setAttribute("style", `background-color: rgb(${rndmRed}, ${rndmGreen}, ${rndmBlue})`);
        })
    });

    const gridBtn = document.querySelector("#grid-btn");
        
    gridBtn.addEventListener("click", () => {
        const size = prompt("Choose a grid size. (Max: 100).");

        const grid = document.querySelector("#container");
        console.log(grid);

        grid.innerHTML = '';

        generateGrid(size);
    })
    
}

generateGrid(DEFAULT_GRID_SIZE);
bindElements();