const DEFAULT_GRID_SIZE = 16;

const generateGrid = (size) => {

    const grid = document.querySelector("#container");

    for(let i = 0; i < size; i++){
        const col = document.createElement("div");

        for(let j = 0; j < size; j++){
            const square = document.createElement("div");
            square.classList.add("grid-item");

            square.style.width = `${700/size}px`;
            square.style.height = `${700/size}px`;

            col.appendChild(square);
        }

        grid.appendChild(col);
    }

}

const bindElements = () => {
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach(gridItem => {
        gridItem.addEventListener("mouseover", () => {
            const rndmRed = Math.random() * 256;
            const rndmGreen = Math.random() * 256;
            const rndmBlue = Math.random() * 256;

            gridItem.style.backgroundColor = `rgb(${rndmRed}, ${rndmGreen}, ${rndmBlue})`;
               
        })
    });
    
}

generateGrid(DEFAULT_GRID_SIZE);
bindElements();

const gridBtn = document.querySelector("#grid-btn");
        
gridBtn.addEventListener("click", () => {
    const size = prompt("Choose a grid size. (Max: 100).");

    const grid = document.querySelector("#container");
    console.log(grid);

    grid.innerHTML = '';

    generateGrid(size);
    bindElements();
})