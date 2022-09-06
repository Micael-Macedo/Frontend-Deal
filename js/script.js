var menu = document.getElementById('navMenu');
function exibirMenu(){
    if(menuItens.style.display == 'block'){
        menuItens.style.display = 'none'
    }else{
        menuItens.style.display = 'block'
    }
}
if(document.body.scrollWidth > 1000){
    menuItens.style.display = 'block';
    menu.style.display = "none";
}else{
    menu.style.display = "block";
    menuItens.style.display = 'none';
}
window.addEventListener('resize',function tamanhoNav(){
    
    if(document.body.scrollWidth < 1000){
        menu.style.display = "block";
        menuItens.style.display = 'none';
    }else{
        menu.style.display = "none";
        menuItens.style.display = 'block';
    }
},true);
