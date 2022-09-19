// let a = "hi";
// let b = "nope";

// console.log(a+b);



// let imageChange = document.querySelector('#imageHere');

// let imageChange = document.getElementByID('image-here');
// console.log(imageChange);

// imageChange.addEventListener('mouseover', function onHover(){
    
// });

// imageChange.addEventListener('mouseleave', function offHover(){
    
    
// });


function onHover() {

    console.log('on');
    let imageChange = document.querySelector('#image-here');
    imageChange.setAttribute ('src','contact_twirl.png');

  

}

function offHover(){
    
    console.log('off');
    let imageChange = document.querySelector('#image-here');
    imageChange.setAttribute ('src','contact.png');

  
}





function mouseOver(cata){
    cata.style.color='rgb(70, 155, 158)';
}

function mouseLeave(cata){
  
    cata.style.color='darkgrey';
}



// function mouseOnPic(pic){
//     pic.tilt.color='rgb(70, 155, 158)';
// }

// function mouseOffPic(pic){
  
//     pic.style.color='darkgrey';
// }
