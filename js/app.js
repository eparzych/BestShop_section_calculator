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




function calcTotal(){
    divTotalPrice.style.display = 'block';

    let total = 0;
    const prodValue = Number(`${products.value * 0.5}`);
    const orderValue = Number(`${orders.value * 0.25}`);

    total = prodValue + orderValue;
    valueTotalPrice.innerText = total;
};


for(let i = 0; i < inputForm.length; i++){
    inputForm[i].addEventListener('keyup', function(ev){
        if((ev.target.value > 0) && (ev.target.value.length > 0) && (ev.target.id == calcLists[i].dataset.id)){

            const cloneElement = calcLists[i].cloneNode(true);
            cloneElement.style.display = 'flex';
            calcSummary.appendChild(cloneElement);


            const childrennns = Array.from(calcLists[i].children);
            
            childrennns.forEach(function(el){
                if(el.className == "item__calc"){
                    console.log('jestem dzieckiem');
                    el.innerText = `${ev.target.value} * 0.5 `;
                }
            })
            calcTotal();
        }
    })
};



// for(let i = 0; i < inputForm.length; i++){
//     inputForm[i].addEventListener('keyup', function(ev){
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