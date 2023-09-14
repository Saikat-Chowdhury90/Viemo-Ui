window.onscroll = function() {scrollFunction()};
var logo = document.getElementById("logoName");
var nextSection = document.getElementsByClassName("video-inner-container");
var navbar = document.getElementsByClassName("header-container");
var items = document.getElementsByTagName("li");
console.log(navbar);
AOS.init();
function scrollFunction()
{
    let len = document.documentElement.scrollTop;
    if(len > 200)
    {
        logo.style.fontSize = "30px";
        
    }
    else
    {
       logo.style.fontSize = "300px";
    }
}

document.addEventListener('scroll' , () => {
    const header = document.querySelector(".header-container")
    if(window.scrollY > 200)
    {
        header.classList.add("scrolled");
    }
    else
    {
        header.classList.remove("scrolled");
    }
})