const navSlide = () =>{
    const burger = document.querySelector('.nav_burger');
    const nav = document.querySelector('.nav_ul');
    const navLinks = document.querySelectorAll('.nav_ul li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index)=>{
        
            if (link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = 'navLinkFade 0.5s ease forwards ' + (index / 7 + 0.2) + 's';
            }
        });

        burger.classList.toggle('toggle');
    });
}

function myFunction() {
    const nav = document.querySelector('.nav');
    const sticky = nav.offsetTop;
    
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky");
    }
}

window.onscroll = function() {myFunction()};
navSlide();


