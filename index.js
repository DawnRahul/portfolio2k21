
//adding nav-var-shadow to nav-bar class on scroll event
window.addEventListener("scroll", navShadow);

function navShadow(){
    console.log("Hello from navShadow");
    let y = window.pageYOffset;
    console.log(y);

    if(y > 30){
        document.querySelector(".nav-bar").classList.add("nav-bar-shadow");
    }
    else{
        document.querySelector(".nav-bar").classList.remove("nav-bar-shadow");
    }
}



//nav-bar for in smartphone

let navBtn = document.querySelector(".nav-btn-symbol");
let clickCount = 0;
navBtn.addEventListener("click", ()=>{
    
    clickCount++;

    if(clickCount%2==0){
        document.querySelector(".nav-link-box").classList.remove("nav-link-box-expand");
        navBtn.innerHTML = "☰";
        navBtn.style.color = "black";
        
        for(let i = 0; i <=3 ; i++){
            document.querySelectorAll(".nav-links")[i].classList.remove("nav-links-expand");
        }
    }
    else{
            document.querySelector(".nav-link-box").classList.add("nav-link-box-expand");
            navBtn.innerHTML = "X";
            navBtn.style.color = "white";

        for(let i = 0; i <=3 ; i++){
            document.querySelectorAll(".nav-links")[i].classList.add("nav-links-expand");
        }
    }
    
});