
function onHover() {

    console.log('on');
    let imageChange = document.querySelector('#image-here');
    imageChange.setAttribute('src', './media/contact_twirl.png');



}

function offHover() {

    console.log('off');
    let imageChange = document.querySelector('#image-here');
    imageChange.setAttribute('src', './media/contact.png');


}




function mouseOver(cata) {
    cata.style.color = 'rgb(70, 155, 158)';
}

function mouseLeave(cata) {

    cata.style.color = 'darkgrey';
}


