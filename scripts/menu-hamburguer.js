const btnMenuMain =  document.querySelector('#buttonMenu');
const contenedorMenu =  document.querySelector('.contenedorMenu');
const btnMenu = document.querySelector('#buttonMenuContenedor');
const menu =  document.querySelector('#menuNavMain');
const optionPages = document.querySelector('#pages');
const submenu = document.querySelector('#submenuNav');
const closeMenu =  document.querySelector('#closeMenu');

btnMenu.addEventListener('click',()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        menu.classList.add('visible');
    }else{
        menu.classList.remove('visible');
        menu.classList.add('hidden');
    }
});

optionPages.addEventListener('click',(e)=>{
    e.preventDefault();
    if(submenu.classList.contains('hidden')){
        submenu.classList.remove('hidden');
        submenu.classList.add('visible');
    }else{
        submenu.classList.remove('visible');
        submenu.classList.add('hidden');
    }
});

btnMenuMain.addEventListener('click',()=>{
    if(contenedorMenu.classList.contains('hidden-container')){
        contenedorMenu.classList.remove('hidden-container');
        contenedorMenu.classList.add('visible-container');
    }
});

closeMenu.addEventListener('click',()=>{
    contenedorMenu.classList.remove('visible-container');
    contenedorMenu.classList.add('hidden-container');
});