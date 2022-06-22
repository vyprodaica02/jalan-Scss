const toggle = document.querySelector('.header-toggle');
const menu = document.querySelector('.menu')
const close = document.querySelector(".header-close")

toggle.addEventListener('click',handleClickToggle)
close.addEventListener('click',closeToggle)
document.addEventListener('click',handleOutClick)
function closeToggle(){
    menu.classList.remove('is-active')
}
function handleClickToggle(e){
    menu.classList.add('is-active');
}
function handleOutClick(e){
    if(!menu.contains(e.target) && !e.target.matches('.header-toggle')){
        closeToggle()
    }
}



// document.addEventListener('click',(e)=>{
//     //event.target.matches("selector")
//     //selector.contains: kiểm tra element có chứa elemnt khác không
//     if(!menu.contains(e.target) && !e.target.matches('.menu-toggle')) {
//         menu.classList.remove('is-show');
//         toggle.classList.remove('fa-times');
//         toggle.classList.add('fa-bars')
//     }
// })
