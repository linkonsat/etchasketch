



function initialization () {
    //handles form input using a sliding scale which triggers the next event that selects based on position. i.e. the event in question.
    //also triggers another function that removes class from spans with the id of x

}
function tablereset() {

}
function squareamountselection() {
    //takes the input which takes in. i.e. event value of x. which triggers the create squares function
}
function createsquares() {

    //takes in the square amount selection and creates a certain amount of divs 
    let box = document.getElementById('divcreator')
    let gridsquare = document.createElement('span')
    gridsquare.classList.add('.divcreator')
 
    box.appendChild(gridsquare)
    
}

function squarechange() {
    //applies a class of click down and triggers another function
}

function squareclasschange() {
    //actives by squarechange and applies a new color over them
}