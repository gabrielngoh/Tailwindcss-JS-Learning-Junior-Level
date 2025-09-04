const hamburger = document.querySelector('#hamburger')
const nav_bar = document.querySelector('nav')
const close_menu = document.querySelector('#closeBtn')
hamburger.addEventListener('click',()=>{
        nav_barAn.play()
        nav_bar.classList.remove('hidden');
        close__menu()
    

})
function close__menu (){
    close_menu.addEventListener('click',()=>{
            nav_bar.classList.add('hidden');
        })
}


const keyFrames_entryNav =    [
        {
            transform : "translateX(50%)",
            opacity : 0
        },
        {
         transform : "translateX(0)",
         opacity: 1
        }
    ] 
const duration__entryNav = {
        duration: 450,
        easing:"ease-in"
    }
    
const nav_barAn = nav_bar.animate(
    keyFrames_entryNav
,
    duration__entryNav
    
)
