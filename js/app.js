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
    let prodValue = Number(`${products.value * prices.products}`);
    let orderValue = Number(`${orders.value * prices.orders}`);
    let accValue = 0;
    let termValue = 0;
    let total = 0;

    if(accounting.checked === true){
        accValue = prices.accounting;
        return accValue;
    }
    if(terminal.checked === true){
        termValue = prices.terminal;
        return accValue;
    }

    total = prodValue + orderValue + accValue + termValue;
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
                    elem.innerText = `${input.value} * ${prices.products}` ;
                }
            });

            const priceArr = Array.from(el.children);

            priceArr.forEach(function(elem){
                if(elem.className == "item__price"){
                    elem.innerText = `${input.value * prices.products}` ;
                }
            });
 
        }
    })
};

// DODAWANIE KOSZTÓW Z CHECKBOXÓW

function addCheckedPrice(input){
    calcLists.forEach(function(el){
        if(input.id == el.dataset.id){        
            el.style.display = 'flex';
            calcTotal();

            const priceArr = Array.from(el.children);

            priceArr.forEach(function(elem){
                if(elem.className == "item__price"){
                    elem.innerText = prices.accounting ;
                }
            });
 
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


// packageChoose.addEventListener("click", founction(){
//     if(selectDropdown.style.display == 'none'){
//         selectDropdown.style.display = 'inlie-block';
//         selectDropdown.children[0].addEventListener("click", function(){

//             calcList[2].style.display = 'flex'
//             calcList[2].children[1].innerText = 'Basic';
//             calcList[2].children[2].innerText = '$10';
//             calcTotal[0].style.display = 'block';
//             total = calcTotal[0].children[1].innerText = total + 10;
//             if(calcList[2].style.display == 'flex'{
//                 selectInput.innerText = 'Basic';
//             })
//         })
//     }
// })

