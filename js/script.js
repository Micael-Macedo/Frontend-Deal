function exibirMenu(){
    if(menuItens.style.display == 'block'){
        menuItens.style.display = 'none'
    }else{
        menuItens.style.display = 'block'
    }
}
window.addEventListener('resize', tamanhoNav());
function tamanhoNav(){
    window.alert(screen.width);
    if(screen.width < 1000){
        document.getElementById("navMenu").style.display = block;
    }else{
        document.getElementById("navMenu").style.display = none;
    }
}