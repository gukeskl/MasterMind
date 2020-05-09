// basic functions
function test() {
    console.log('work');
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function set_game_settings() {
    game_settings.rounds_number = parseInt(document.querySelector('#rounds_number').value);
    game_settings.difficulty_lv = parseInt(document.querySelector('#difficulty_lv').value);
    game_settings.numberOfColors = game_settings.difficulty_lv + 3;
}

// Rand color combination
function rand_colorCombination(rowLength, colorsNumber) {

    for (let i = 0; i < rowLength; i++) {
        game_settings.correct_colors_table[i] = getRandomInt(1, colorsNumber);
        console.log(game_settings.correct_colors_table[i]);

        //chacking if colors doesnt repet
        for (let j = 0; j < i; j++)
            if (game_settings.correct_colors_table[i] === game_settings.correct_colors_table[j])
                i--;
    }
}

// Preparing the game panel where user can set the combination 
function add_gameButton(butt_number) {
    IDname = 'butt_' + butt_number;
    let button = document.createElement('button');

    button.classList.add('game__element', 'color0');
    button.id = IDname;

    actual_game.appendChild(button);
    button.addEventListener('click', function () {
        color_changing(butt_number);
    });

}

function prepare_game_panel() {
    let butt_number;
    for (let i = 0; i < game_settings.difficulty_lv; i++) {
        butt_number = i;
        add_gameButton(butt_number);
        game_settings.actual_game_choices[i] = 0;
    }
}


//color changing function
function color_changing(butt_number) {
    let changed_button = document.getElementById('butt_' + butt_number);

    changed_button.classList.remove('color' + game_settings.actual_game_choices[butt_number]);

    if (game_settings.actual_game_choices[butt_number] === game_settings.numberOfColors)
        game_settings.actual_game_choices[butt_number] = 1;
    else
        game_settings.actual_game_choices[butt_number] += 1;

    changed_button.classList.add('color' + game_settings.actual_game_choices[butt_number]);

}


//corectness of the combination
function is_correct() {
    for (let i = 0; i < game_settings.correct_colors_table.length; i++)
        if (game_settings.actual_game_choices[i] != game_settings.correct_colors_table[i])
            return false;

    return true;
}

//chacking if colors doesnt repeat
function does_repeat() {

    for (let i = 0; i < game_settings.actual_game_choices.length; i++) {
        for (let j = i + 1; j < game_settings.actual_game_choices.length; j++)
            if (game_settings.actual_game_choices[i] == game_settings.actual_game_choices[j]) {
                i = j = game_settings.actual_game_choices.length;
                return true;
            }
    }
    return false;
}



//checking function
function check() {

    if (!does_repeat()) {
        if (!is_correct() && (game_settings.round_counter != game_settings.rounds_number))
            add_to_history();
        else if(game_settings.round_counter == game_settings.rounds_number)
                alert("no more rounds!");
            else if(is_correct)
                    alert("good combination!");
    } else
        alert('your colors are repeted!')
}

//creating history box with last game combination and the resulst of the combination
function add_to_history() {
    game_settings.round_counter++;
    console.log(game_settings.round_counter);

    //creating history box
    let history_box = document.createElement('div');

    //creating copy of the last choices
    history_box.classList.add('game__history');

    for (let i = 0; i < game_settings.actual_game_choices.length; i++) {
        let history_element = document.createElement('div');
        history_element.classList.add('history__element', 'color' + game_settings.actual_game_choices[i]);
        history_box.appendChild(history_element);
    }

    //creating card with results - black and red dots
    let results_box = document.createElement('div');
    let black_dots_row = document.createElement('div');
    let red_dots_row = document.createElement('div');
    results_box.classList.add('results__card');
    black_dots_row.classList.add('dots_row');
    red_dots_row.classList.add('dots_row');


    //red and black dot checking
    let red_dots_number = 0;
    let black_dots_number = 0;

    for (let i = 0; i < game_settings.actual_game_choices.length; i++) {

        for (j = 0; j < game_settings.correct_colors_table.length; j++)
            if (game_settings.actual_game_choices[i] === game_settings.correct_colors_table[j])
                red_dots_number++;

        if (game_settings.actual_game_choices[i] === game_settings.correct_colors_table[i]) {
            black_dots_number++;
            red_dots_number--;
        }
    }

    while (black_dots_number > 0) {
        let black_dot = document.createElement('div');
        black_dot.classList.add('result', 'black_dot')
        black_dots_row.appendChild(black_dot);

        black_dots_number--;
    }

    while (red_dots_number > 0) {
        let red_dot = document.createElement('div');
        red_dot.classList.add('result', 'red_dot');
        red_dots_row.appendChild(red_dot);

        red_dots_number--;
    }
    results_box.appendChild(black_dots_row);
    results_box.appendChild(red_dots_row);
    history_box.appendChild(results_box);
    game_history.appendChild(history_box);
}



