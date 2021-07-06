/*const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () =>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }

});*/
var a;
function hide(){
    if(a==1){
        document.getElementsByClassName("wholebody").style.display="inline";
        return a =0;
    }
    else {
        document.getElementsByClassName("wholebody").style.display="none";
        return a=1;
    }
}