const divContainer = document.querySelector(".container");
//divContainer.textContent = "Test";




const gridSizeInput = document.getElementById('grid-size');
const submitBtn = document.getElementById('size-btn');
submitBtn.addEventListener('click', () => {
    
    const size = gridSizeInput.value;

    if(size <= 100){
        deleteSquares();
        populateGrid(size);
        activateSquares();
    }else{
        alert("Size must be no greater than 100");
    }

});

function activateSquares(){

const squares = document.getElementsByClassName("grid-square")

Array.from(squares).forEach (square => {

    square.addEventListener('mouseover', () => changeColor(square));


});

}

function changeColor(squareDiv){
    squareDiv.style.backgroundColor = "blue";
}




function populateGrid(size){
    const rect = divContainer.getBoundingClientRect();
    for(let i = 0; i < size; i++){
        
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < size; j++){
            
            let div = document.createElement("div");
            div.classList.add("grid-square");
            div.style.height = (Math.floor(((rect.height - 10) / size))) + "px";
            div.style.width = (Math.floor(((rect.width - 10) / size))) + "px";
            
            row.appendChild(div);

        }
        divContainer.appendChild(row);
    }
}


function deleteSquares(){
    const rows = document.getElementsByClassName("row")

    Array.from(rows).forEach (row => {
    
        row.remove();
    
    
    });

}