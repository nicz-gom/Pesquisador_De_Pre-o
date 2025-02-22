//buttons
let foudPriceButtonElement = document.getElementById("foudPrice");
let foudItemButtonElement = document.getElementById("foudItem");
let filterElement = document.getElementById("filter");

//inputs
let priceElement = document.getElementById("price");
let itemElement = document.getElementById("item");

//div´s
let divElement = document.getElementById("storage");

const products = [ { name: 'Maça', price: 2.5 }, { name: 'Coca cola', price: 8 }, { name: 'Guarana', price: 5 }, { name: 'Chocolate', price: 20 } ];

function foudPrice(){
    let convertedPriceElement = Number(priceElement.value);
    var i = 0;

    products.find((item) => {
        if(item.price === convertedPriceElement){
            alert(`Element found, this is your element: ${item.name}, ${item.price}`);
        }else{
            i++;
        }
    })

    priceElement.value = '';

    if(i == products.length){
        alert(`Can't find your element!`);
    }
}

function foudItem(){
    let getItemElement = itemElement.value;
    i = 0;
    itemElement.value = '';

    products.find((item)=>{
        if(item.name == getItemElement){
            alert(`Element found, this is your element: ${item.name}, ${item.price}`);
        }else{
            i++;
        }
    })

    if(i == products.length){
        alert(`Can't find your element!`);
    }

}

function filter(){
    let getElement_inReturn = products.filter((item)=>{
        return item.price <= 8;
    })

    console.log(getElement_inReturn);

    let pElement = document.createElement("p");
    let pText = document.createTextNode(`Element with price less than or equal to the condition: ${getElement_inReturn}`);
    pElement.appendChild(pText);
    divElement.appendChild(pElement);
}

filterElement.onclick = filter;
foudItemButtonElement.onclick = foudItem;
foudPriceButtonElement.onclick = foudPrice;