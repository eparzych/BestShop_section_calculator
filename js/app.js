const form = document.querySelector('.calc__form');
const inputForm = Array.from(form.children);

const products = document.querySelector('#products');
const orders = document.querySelector('#orders');
const packageChoose = document.querySelector('#package');
const selectDropdown = document.querySelector('.select_dropdown');
const accounting = document.querySelector('#accounting');
const terminal = document.querySelector('#terminal');

const calcSummary = document.querySelector('.calc__summary ul');
const calcLists = Array.from(document.querySelectorAll('ul .list__item'));
const divTotalPrice = document.querySelector('#total-price');
let valueTotalPrice = document.querySelector('.total__price');

const prices = {
    products: 0.5,
    orders: 0.25,
    package: {
        basic: 0,
        professional: 25,
        premium: 60
    },
    accounting: 35,
    terminal: 5
};

// SUMOWANIE KOSZTÓW ZAMÓWIENIA
function calcTotal(){
    let priceProducts = 0.5;
    let priceOrders = 0.25;
    let prodValue = Number(`${products.value * priceProducts}`);
    let orderValue = Number(`${orders.value * priceOrders}`);
    let total = 0;

    total = prodValue + orderValue;
    valueTotalPrice.innerText = total;
    divTotalPrice.style.display = 'block';
};

// DODAWANIE PRODUKTU DO ZAMÓWIENIA
function addOrders(input){
    calcLists.forEach(function(el){
        if(input.id == el.dataset.id && input.value > 0 && input.value.length > 0){        
            el.style.display = 'flex';
            calcTotal();

            const orderArr = Array.from(el.children);
            orderArr.forEach(function(elem){
                if(elem.className == "item__calc"){
                    // console.log('jestem dzieckiem');
                    elem.innerText = `${input.value} * 0.5` ;
                }
            });

            const priceArr = Array.from(el.children);
            priceArr.forEach(function(elem){
                if(elem.className == "item__price"){
                    // console.log('jestem portfelem');
                    elem.innerText = ` ${input.value * prices.products}` ;
                }
            });
 
        }
    })
};


// WYBIERANIE ZAMÓWIENIA
for(let i = 0; i < inputForm.length; i++){
    inputForm[i].addEventListener('change', function(ev){
        addOrders(ev.target);
    })
};




// II SPOSOB
// function calcTotal(){
//     divTotalPrice.style.display = 'block';

//     let total = 0;
//     const prodValue = Number(`${products.value * 0.5}`);
//     const orderValue = Number(`${orders.value * 0.25}`);

//     total = prodValue + orderValue;
//     valueTotalPrice .innerText = total;
// };


// for(let i = 0; i < inputForm.length; i++){
//     inputForm[i].addEventListener('change', function(ev){
//         if((ev.target.value > 0) && (ev.target.value.length > 0) && (ev.target.id == calcLists[i].dataset.id)){
//             calcLists[i].style.display = 'flex';


//             const childrennns = Array.from(calcLists[i].children);
            
//             childrennns.forEach(function(el){
//                 if(el.className == "item__calc"){
//                     console.log('jestem dzieckiem');
//                     el.innerText = `${ev.target.value} * 0.5 `;
//                 }
//             })
//             calcTotal();
//         }
//     })
// };

