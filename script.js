const frames = document.querySelectorAll('.frame')

frames.forEach((frame) => {
    frame.addEventListener('click', ()=>{
        removeActiveClass();
        frame.classList.add('active')
    })
})

function removeActiveClass(frame){
    frames.forEach((frame)=> {
        frame.classList.remove('active')
    })
}



  
// const frames = document.querySelectorAll('.frame')

// frames.forEach(frame => {
//     frame.addEventListener('click', () => {
//         removeActiveClasses()
//         frame.classList.add('active')
//     })
// })

// function removeActiveClasses() {
//     frames.forEach(frame => {
//         frame.classList.remove('active')
//     })
// }