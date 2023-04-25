const sections = document.querySelectorAll('section');
const navs = document.querySelectorAll('nav ul li');
let prev = ""
let current = "";

window.addEventListener('scroll', ()=>{
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY >= (sectionTop - sectionHeight / 3) && scrollY < (sectionTop + sectionHeight - sectionHeight / 3)){
            prev = current;
            current = section.getAttribute('id');
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