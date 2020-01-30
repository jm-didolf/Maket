window.onload = function() {
    let hiddenElements = document.querySelectorAll('.brand-block__brands');
    console.log(hiddenElements);

   function checker(hiddenElements) {
    for (let i = 0; i < hiddenElements.length; i++){

        hiddenElements[i].classList.add('unvisible');
    }
}



}


