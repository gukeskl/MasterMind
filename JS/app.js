/*
  initial game settings - round number, 
  difficulty level, colors number and color combination array 
*/

let game_settings = {
    rounds_number,
    difficulty_lv,
    numberOfColors: 0,
    correct_colors_table: [],
    actual_game_choices: []
}


// Starting the game
start_button.addEventListener('click', function(){

    set_game_settings();
    menu_div.classList.toggle('menu__out');
    rand_colorCombination(game_settings.difficulty_lv , game_settings.numberOfColors);
    console.log(game_settings.correct_colors_table);
    prepare_game_panel();
    }
    );

check_button.addEventListener('click', check);
