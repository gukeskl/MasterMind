
//game settings
const round_number = document.querySelector('#rounds_number').value;
const difficulty_lv = document.querySelector('#difficulty_lv').value;

//buttons conection
const start_button = document.querySelector('#start__button');

function form_display() {
    console.log('Rounds Number: ' + round_number.value);
    console.log('Difficulty Level: ' + difficulty_lv.value);
}



console.log(document.body.clientWidth);
start_button.addEventListener('click',form_display);



