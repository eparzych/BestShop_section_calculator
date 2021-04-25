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
    let prodValue = 0;
    let orderValue = 0;
    let accValue = 0;
    let termValue = 0;
    let total = 0;

    if(products.value > 0){
        prodValue = Number(`${products.value * prices.products}`);
    }
    if(orders.value > 0){
        orderValue = Number(`${orders.value * prices.orders}`);
    }
    if(accounting.checked === true){
        accValue = prices.accounting;
    }
    if(terminal.checked === true){
        termValue = prices.terminal;
    }

    total = prodValue + orderValue + accValue + termValue;
    valueTotalPrice.innerText = total;
    divTotalPrice.style.display = 'block';
};

// DODAWANIE PRODUKTU DO ZAMÓWIENIA
function addOrders(input){
    calcLists.forEach(function(el){
        if(input.id == el.dataset.id){  
            if(input.value > 0){ 
                el.style.display = 'flex';
                 // el.querySelector(".item__calc")
                const orderArr = Array.from(el.children);
 
                orderArr.forEach(function(elem){
                    if(elem.className == "item__calc"){
                        elem.innerText = `${input.value} * ${prices[input.id]}` ;
                    }
                });

                const priceArr = Array.from(el.children);

                priceArr.forEach(function(elem){
                    if(elem.className == "item__price"){
                        elem.innerText = `${input.value * prices[input.id]}` ;
                    }
                });
            } else {
                el.style.display = 'none';   
            }     
            calcTotal();
 
        }
    })
};

// DODAWANIE KOSZTÓW Z CHECKBOXÓW

function addCheckedPrice(input){
    calcLists.forEach(function(el){
        if(input.id == el.dataset.id){        
            if(input.checked === true){
                el.style.display = 'flex';

                const priceArr = Array.from(el.children);

                priceArr.forEach(function(elem){
                    if(elem.className == "item__price"){
                        elem.innerText = prices[input.id] ;
                    }
                });
            } else {
                el.style.display = 'none';
            }
            calcTotal();
        }
    })
};

// DODAWANIE KOSZTÓW Z CHOOSE PACKAGE

function addChoosePackagePrice(){
    calcTotal();
};


// WYBIERANIE ZAMÓWIENIA
for(let i = 0; i < inputForm.length; i++){
    if(inputForm[i].className == 'calc__input'){
        inputForm[i].addEventListener('change', function(ev){
            addOrders(ev.target);
        })
    }
    if(inputForm[i].idName == 'package'){
        inputForm[i].addEventListener('click', function(ev){
            addChoosePackagePrice(ev.target);
        })
    }
    if(inputForm[i].className == 'form__checkbox'){
        inputForm[i].addEventListener('click', function(ev){
            addCheckedPrice(ev.target);
        })
    }
};
