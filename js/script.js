var menu = document.getElementById('navMenuButton');
function exibirMenu(){
    if(NavMobile.style.display == 'flex'){
        NavMobile.style.display = 'none'
    }else{
        NavMobile.style.display = 'flex'
        
    }
}
if(document.body.scrollWidth > 1200){
    menuItensDesktop.style.display = 'flex';
    menu.style.display = "none";
    NavMobile.style.display = 'none';
}else{
    menu.style.display = "block";
    menuItensDesktop.style.display = 'none';
}
window.addEventListener('resize',function tamanhoNav(){
    
    if(document.body.scrollWidth < 1200){
        menu.style.display = "block";
        menuItensDesktop.style.display = 'none';
    }else{
        menu.style.display = "none";
        menuItensDesktop.style.display = 'flex';
        NavMobile.style.display = 'none';
    }
},true);
