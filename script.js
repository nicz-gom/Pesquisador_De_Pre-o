//buttons
let foudPriceButtonElement = document.getElementById("foudPrice");
let foudItemButtonElement = document.getElementById("foudItem");

//inputs
let priceElement = document.getElementById("price").value;
let itemElement = document.getElementById("item").value;

const products = [ { name: 'Maça', price: 2.5 }, { name: 'Coca cola', price: 8 }, { name: 'Guarana', price: 5 }, { name: 'Chocolate', price: 20 } ];

function foudPrice(){
    alert(priceElement);
}

function foudItem(){
    alert("Teste");
}

foudItemButtonElement.onclick = foudItem;
foudPriceButtonElement.onclick = foudPrice;