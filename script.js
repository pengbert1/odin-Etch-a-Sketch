const divContainer = document.querySelector(".container");
//divContainer.textContent = "Test";



for(let i = 0; i < 16; i++){
    
    const row = document.createElement("div");
    row.classList.add("row");
    for(let i = 0; i < 16; i++){
        
        let div = document.createElement("div");
        div.classList.add("grid-square");
        
        divContainer.appendChild(div);
        row.appendChild(div);

    }
    divContainer.appendChild(row);
}

const squares = document.getElementsByClassName("grid-square")

Array.from(squares).forEach (square => {

    square.addEventListener('mouseover', () => changeColor(square));


});



function changeColor(squareDiv){
    squareDiv.style.backgroundColor = "blue";
}