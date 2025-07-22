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
    for(let i = 0; i < size; i++){
        
        const row = document.createElement("div");
        row.classList.add("row");
        for(let i = 0; i < size; i++){
            
            let div = document.createElement("div");
            div.classList.add("grid-square");
            div.style.height = (((window.innerHeight - 100) / size) - 2) + "px";
            div.style.width = ((window.innerWidth / size) - 2) + "px";
            
            divContainer.appendChild(div);
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