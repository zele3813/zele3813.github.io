// console.log("scripts.js linked");
const sections = document.querySelectorAll('section');
const navs = document.querySelectorAll('nav ul li');
let prev = "home"
let current = "home";

window.addEventListener('scroll', ()=>{
    sections.forEach(section => {
        // console.log(section.getAttribute('id'));
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY >= (sectionTop - sectionHeight / 3) && scrollY < (sectionTop + sectionHeight / 2)){
            prev = current;
            // console.log(prev)
            current = section.getAttribute('id');
            // console.log(current)
        }
    })
    if(prev != current){
        navs.forEach(nav=>{
            nav.classList.remove('current')
            if(nav.classList.contains(current)){
                nav.classList.add('current');
            }
        })
    }
    
})