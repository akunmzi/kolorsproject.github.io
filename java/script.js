window.addEventListener("scroll",function(){
    const header = document.querySelector("nav");
    header.classList.toggle("sticky",window.scrollY > 0);
})
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('ul')[0]

toggleButton.addEventListener('click',() => {
    navBarLinks.classList.toggle('active')
})