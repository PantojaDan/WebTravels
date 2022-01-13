const selectDias = document.querySelector('#selectDias');
const optionDias = document.querySelector('#optionDias');
const flecha =  document.querySelector('.fa-chevron-down');

selectDias.addEventListener('click',()=>{
    if(optionDias.classList.contains('hidden')){
        optionDias.classList.remove('hidden');
        optionDias.classList.add('visible');
        flecha.classList.remove('ocultarOpciones');
        flecha.classList.add('mostrarOpciones');
    }else{
        optionDias.classList.remove('visible');
        optionDias.classList.add('hidden');
        flecha.classList.remove('mostrarOpciones');
        flecha.classList.add('ocultarOpciones');
    }
});

optionDias.addEventListener('click',e=>{
    const liText = e.target.textContent;
    const p = selectDias.querySelector('p');
    p.textContent = "";
    p.textContent = liText;
});