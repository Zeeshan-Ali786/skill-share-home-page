
                // Image Slider JavaScript


let flag = 0;
// for let right controller

function controller(x){
    flag = flag + x;
    slideshow(flag)

}

function slideshow(num){
    let slides = document.getElementsByClassName('slide');  //store all div slide in array form
    
    if(num == slides.length){
        flag = 0;
        num = 0;
    }

    if(num < 0){
        flag = slides.length-1;
        num = slides.length-1;
    }
    
    
    //first all slides invisible 
    for(let i of slides){
        i.style.display = "none";
    }
    // show first slide in 0 index by using flag current value
    slides[num].style.display = "block"


    
// color dot in current slide index 
    let dots = document.getElementsByClassName('dot');

    console.log(dots)
    // first all dots have sliver backgroung
    for(let i of dots){
        i.style.background = "#bbb";
    }
    // 
    dots[num].style.background = "#3722d3"
    dots[num].style.transition = "1s"
    console.log(dots[num])


}
slideshow(flag)

let dot = 0;
function slideDot(x){
    let dotslide = document.getElementsByClassName('slide');

//slide image by clicking dots 
    //first all slides invisible 
    for(let i of dotslide){
        i.style.display = "none";
    }
    // show first slide in 0 index by using dot current value
    dotslide[x].style.display = "block"


// color selected dot
    let dots = document.getElementsByClassName('dot');
    for(let i of dots){
        i.style.background = "#bbb";
    }


    dots[x].style.background = "#3722d3"

    console.log(dotslide[x])
    console.log(dots[x])

}
slideDot(dot)

