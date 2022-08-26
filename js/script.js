function exibirMenu(){
    if(menuItens.style.display == 'block'){
        menuItens.style.display = 'none'
    }else{
        menuItens.style.display = 'block'
    }
}
window.addEventListener('resize',function tamanhoNav(){
    var menu = document.getElementById('navMenu');
    if(document.body.scrollWidth < 1000){
        window.alert("entrei")
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }
},true);
