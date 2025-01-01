const scrollUPBtn = document.querySelector(".scroll__btn");

window.onscroll = ()=> {
    if(window.scrollY > 100){
        scrollUPBtn.style.display = "flex"
    }
    else{
        scrollUPBtn.style.display = "none"
    }
}
