
// import clickCategory from "./clickCategory.js";
// import clickMarca from "./clickMarca.js";
// import clickColor from "./clickColor.js";
// import clickFilter from "./clickFilter.js";

// clickCategory();
// clickMarca();
// clickColor();
// clickFilter();





const btnCategory = document.querySelector('.btn-category');
const category = document.querySelector('.categoria');
const btnMarca = document.querySelector('.btn-marca');
const marcas = document.querySelector('.marcas');
const btnColor = document.querySelector('.btn-color');
const cores = document.querySelector('.cores');
const btnFilter = document.querySelector('.btn-filter');
const modalFilter = document.querySelector('.modal-price');



function clickCategory(event) {
   const target = event.target.querySelector('.seta');
   target.classList.toggle('ativo');
    
   return category.classList.toggle('ativo');
}
btnCategory.addEventListener('click',clickCategory);




function clickMarca(event) {
   const target = event.target.querySelector('.seta');
   target.classList.toggle('ativo');

   return marcas.classList.toggle('ativo');

}
btnMarca.addEventListener('click', clickMarca);





function clickColor(event) {
   const target = event.target.querySelector('.seta');
   target.classList.toggle('ativo');

   return cores.classList.toggle('ativo');
}
btnColor.addEventListener('click',clickColor)




function clickFilter(event) {
   const target = event.target.querySelector('.seta');
   target.classList.toggle('ativo');

   return modalFilter.classList.toggle('ativo')
}
 btnFilter.addEventListener('click',clickFilter)




 // FUNCOES PARA REDENRIZAR A CATEGORIA ABAIXO...

const todos = document.getElementById('todos');
const games = document.getElementById('games');
const smartPhones = document.getElementById('smartphones');
const notebooks = document.getElementById('notebooks');
const eletronicos = document.getElementById('eletrônicos');


function checkGames() {
  listItems(arraysApis[1]);
}

function checkPhones() {
   listItems(arraysApis[2]);
}

function checkNotebooks() {
   listItems(arraysApis[3]);
}

function checkEletronicos() {
   listItems(arraysApis[4]);
}


function checkTodos() {
   listItems(arraysApis[0]);

}

todos.addEventListener('click', checkTodos);
smartPhones.addEventListener('click', checkPhones);
games.addEventListener('click', checkGames);
notebooks.addEventListener('click', checkNotebooks);
eletronicos.addEventListener('click', checkEletronicos);


// CHAMADAS DE APIS ABAIXO....


let arraysApis = [];

const urlsApis = {
   dado0: await fetch('apis/mainProducts.json'),
   dado1: await fetch('apis/games.json'),
   dado2: await fetch('apis/smartphones.json'),
   dado3: await fetch('apis/notebooks.json'),
   dado4: await fetch('apis/eletronicos.json')
}

const urls = await Promise.all([
   urlsApis.dado0,
   urlsApis.dado1,
   urlsApis.dado2,
   urlsApis.dado3,
   urlsApis.dado4

]).then(resposta => {
    resposta.map((item) => {
      
      if(!item.ok) throw new Error('Erro na chamada!');
   })

  return Promise.all(resposta.map((item) => item.json()));
}).then(resposta => arraysApis.push(...resposta));





function listItems(items) {
   const main = document.querySelector('.main');
   main.innerHTML = "";

   for(let item of items) {
      main.innerHTML += cardItems(item);
   }
}

listItems(arraysApis[0]);




function cardItems(item) {

   return `
   <div class="card-item" id="${item.id}">
        <div class="love">

          <div class="heart-container" title="Like">
            <input type="checkbox" class="checkbox" id="Give-It-An-Id">
            <div class="svg-container">
                <svg viewBox="0 0 24 24" class="svg-outline" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                    </path>
                </svg>
                <svg viewBox="0 0 24 24" class="svg-filled" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                    </path>
                </svg>
                <svg class="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,10 20,20"></polygon>
                    <polygon points="10,50 20,50"></polygon>
                    <polygon points="20,80 30,70"></polygon>
                    <polygon points="90,10 80,20"></polygon>
                    <polygon points="90,50 80,50"></polygon>
                    <polygon points="80,80 70,70"></polygon>
                </svg>
            </div>
        </div>
        </div>
        <img src="${item.imagem}" alt="" class="img-product">
        <p>${item.nome}</p>
        <p>${item.tipo}</p>
        <p>${item.preco}</p>
      </div>`
}


// FUNCOES FILTRO DE MARCA ABAIXO....

const apple = document.getElementById('apple')
.addEventListener('click',() => {
   filterBrand('apple');
})
 
const xbox = document.getElementById('xbox')
.addEventListener('click',() => {
   filterBrand('xbox');
})

const jbl = document.getElementById('jbl')
.addEventListener('click',() => {
   filterBrand('jbl');
})

const playstation = document.getElementById('playstation')
.addEventListener('click',() => {
   filterBrand('playstation');
})


function filterBrand(marca) {
   const newArray = Array.from(arraysApis[0]);
   const filterMarca = newArray.filter((item) => {
      return item.marca === marca;
   })
   listItems(filterMarca);
}





// FUNCOES FILTRO DE COR ABAIXO....

const vermelho = document.getElementById('vermelho')
.addEventListener('click',() => filterColor('vermelho'));

const azul = document.getElementById('azul')
.addEventListener('click',() => filterColor('azul'));

const branco = document.getElementById('branco')
.addEventListener('click',() => filterColor('branco'));

const preto = document.getElementById('preto')
.addEventListener('click',() => filterColor('preto'));


function filterColor(color) {
   const newArray = Array.from(arraysApis[0]);
   const filterCor = newArray.filter((item) => {
      return item.cor === color;
   })
   listItems(filterCor);
}

