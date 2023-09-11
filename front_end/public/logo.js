
let open='puppy1.jpg'
let closed='puppy2.jpg'
let puppyLogo = document.getElementById('logo')

function appendlogo(image){
    document.getElementById('logo').src=image
}

//This is a promise function that will delay the appending of each image to create a sequence of movement
function wait(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

async function puppy(){
    appendlogo(open)
    await wait(2000)
    appendlogo(closed)
}
//This function repeats the swimmerAnime function every second
setInterval(puppy,4000) 