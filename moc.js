var navbar = document.getElementById('navbar-main')
history.scrollRestoration = "manual"
window.addEventListener('scroll', (e) => {  
   
    if(window.scrollY==0){
        navbar.style.backgroundColor = 'transparent'
        navbar.style.transition = '1s'
    } else {
        navbar.style.backgroundColor = '#a486bd'
        navbar.style.transition = '500ms'
    }  
  })