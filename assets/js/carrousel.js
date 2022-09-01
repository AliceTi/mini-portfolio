let one = document.getElementById('carrousel-item-one');
let two = document.getElementById('carrousel-item-two');
let three = document.getElementById('carrousel-item-three');
let four = document.getElementById('carrousel-item-four');
let five = document.getElementById('carrousel-item-five');

let progressOne = document.getElementById('dot-one');
let progressTwo = document.getElementById('dot-two');
let progressThree = document.getElementById('dot-three');
let progressFour = document.getElementById('dot-four');
let progressFive = document.getElementById('dot-five');

function showOne(){
    one.style.display = 'flex';
    two.style.display = 'none';
    three.style.display = 'none';
    four.style.display = 'none';
    five.style.display = 'none';

    progressOne.setAttribute("class","ri-checkbox-blank-circle-fill navigation small-circle");
    progressTwo.setAttribute("class","ri-checkbox-blank-circle-line navigation small-circle");
    progressThree.setAttribute("class","ri-checkbox-blank-circle-line navigation small-circle");
    progressFour.setAttribute("class","ri-checkbox-blank-circle-line navigation small-circle");
    progressFive.setAttribute("class","ri-checkbox-blank-circle-line navigation small-circle");
}

function showTwo(){
    one.style.display = 'none';
    two.style.display = 'flex';
    three.style.display = 'none';
    four.style.display = 'none';
    five.style.display = 'none';

    progressOne.setAttribute("class","ri-checkbox-blank-circle-line navigation small-circle");
    progressTwo.setAttribute("class","ri-checkbox-blank-circle-fill navigation small-circle");
    progressThree.setAttribute("class","ri-checkbox-blank-circle-line navigation small-circle");
    progressFour.setAttribute("class","ri-checkbox-blank-circle-line navigation small-circle");
    progressFive.setAttribute("class","ri-checkbox-blank-circle-line navigation small-circle");
}

function showThree(){
    one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'flex';
    four.style.display = 'none';
    five.style.display = 'none';

    progressOne.setAttribute("class","ri-checkbox-blank-circle-line navigation small-circle");
    progressTwo.setAttribute("class","ri-checkbox-blank-circle-line navigation small-circle");
    progressThree.setAttribute("class","ri-checkbox-blank-circle-fill navigation small-circle");
    progressFour.setAttribute("class","ri-checkbox-blank-circle-line navigation small-circle");
    progressFive.setAttribute("class","ri-checkbox-blank-circle-line navigation small-circle");
}

function showFour(){
    one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'none';
    four.style.display = 'flex';
    five.style.display = 'none';

    progressOne.setAttribute("class","ri-checkbox-blank-circle-line navigation small-circle");
    progressTwo.setAttribute("class","ri-checkbox-blank-circle-line navigation small-circle");
    progressThree.setAttribute("class","ri-checkbox-blank-circle-line navigation small-circle");
    progressFour.setAttribute("class","ri-checkbox-blank-circle-fill navigation small-circle");
    progressFive.setAttribute("class","ri-checkbox-blank-circle-line navigation small-circle");
}

function showFive(){
    one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'none';
    four.style.display = 'none';
    five.style.display = 'flex';

    progressOne.setAttribute("class","ri-checkbox-blank-circle-line navigation small-circle");
    progressTwo.setAttribute("class","ri-checkbox-blank-circle-line navigation small-circle");
    progressThree.setAttribute("class","ri-checkbox-blank-circle-line navigation small-circle");
    progressFour.setAttribute("class","ri-checkbox-blank-circle-line navigation small-circle");
    progressFive.setAttribute("class","ri-checkbox-blank-circle-fill navigation small-circle");
}