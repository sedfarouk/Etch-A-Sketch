const container = document.querySelector('.container');
const height = container.offsetHeight;
const width = container.offsetWidth;

function gridGenerator(squares){
    const area = squares**2;

    for (let i=0; i < area; i++){
        const div = document.createElement('div');
        div.className = "grid";
        div.style.width = `${(width-10)/squares}px`;
        div.style.height = `${(height)/squares}px`;
        container.appendChild(div);
    };
};

function colorGrid(color){
    const grid = document.querySelectorAll('.grid');

    grid.forEach((item)=>{
        item.addEventListener('dragover', function (){
            item.style.backgroundColor = color;
            console.log(item.style.backgroundColor);
        });
    });
};

gridGenerator(10);
colorGrid('black');

const select = document.querySelector('#select');

select.addEventListener('click', ()=>{
    alert('Enter number of squares. Please DO NOT enter a number more than 100 ');
    squares = parseInt(window.prompt("Enter number: ", 0));
    
    gridGenerator(squares);
    colorGrid('black');
});

const eraser = document.querySelector('#eraser');

eraser.addEventListener('click', ()=>{
    colorGrid('white');
});


