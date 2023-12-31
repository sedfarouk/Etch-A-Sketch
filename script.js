const container = document.querySelector('.container');
const height = container.offsetHeight;
const width = container.offsetWidth;

const select = document.querySelector('#select');
const eraser = document.querySelector('#eraser');
const special = document.querySelector('#special');
const defaultColor = document.querySelector('#default');

function gridGenerator(squares){
    const area = squares**2;

    for (let i=0; i < area; i++){
        const div = document.createElement('div');
        div.className = "grid";
        div.style.width = `${(width-6)/squares}px`;
        div.style.height = `${(height-6)/squares}px`;
        container.appendChild(div);
    };
};

function randomColor(){
    return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
}

function colorGrid(color){
    const grid = document.querySelectorAll('.grid');

    grid.forEach((item)=>{
        item.addEventListener('dragover', function (){
            if (color!=='rainbow'){
                item.style.backgroundColor = color;
            } else {
                item.style.backgroundColor = randomColor();
            }
        });
    });
};

window.onload = ()=>{
    gridGenerator(10);
    colorGrid('black');
};

select.addEventListener('click', ()=>{
    squares = parseInt(window.prompt("Enter a number not more than 100: ", 0));
    
    container.innerHTML = "";
    gridGenerator(squares);
    colorGrid('black');
});

eraser.addEventListener('click', ()=>{
    colorGrid('white');
});

special.addEventListener('click', ()=>{
    colorGrid('rainbow');
});

special.addEventListener('click', ()=>{
    colorGrid('rainbow');
});

defaultColor.addEventListener('click', ()=>{
    colorGrid('black');
});


