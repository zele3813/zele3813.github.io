window.onload = function(){
    // Highlight the navbar links based on current section of the page
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

    // Hide the navbar scrolling down. Show the navbar scrolling up.
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("nav-wrap").style.top = "0";
        } else {
            document.getElementById("nav-wrap").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }
}