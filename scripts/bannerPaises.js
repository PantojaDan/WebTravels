const texto = document.querySelector('#nameCountry');
const listaPaises = document.getElementById('listaPaises');
var margin = 0;
let bandera = 2;
let i = 0;
let l = listaPaises.children.length;
texto.textContent = listaPaises.children[0].textContent;

setInterval(()=>{
    if((bandera%2)==0){
        moverDerecha();
    }
    if((bandera%2)!=0){
        moverIzquierda();
    }
    if(i==l){
        i = 0;
    }
    texto.textContent = listaPaises.children[i].textContent;
    i++;
},3000);


function  moverIzquierda() {
    listaPaises.style.marginLeft = `-${margin}%`;
    margin-=20;
    if(margin == 0){
        bandera++;
    }
}

function moverDerecha() {
    listaPaises.style.marginLeft = `-${margin}%`;
    margin+=20;
    if(margin == 100){
        bandera++;
    }
}
