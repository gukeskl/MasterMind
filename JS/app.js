/*
  initial game settings - round number, 
  difficulty level, colors number and color combination array 
*/

let game_settings = {
    rounds_number,
    difficulty_lv,
    numberOfColors: 0,
    correct_colors_table: [],
    actual_game_choices: [],
    round_counter: 0
}


// Starting the game
start_button.addEventListener('click', function(){

    set_game_settings();

    menu_div.classList.toggle('menu__out');
    setTimeout(() => {
      menu_div.style.display = 'none';
      game.style.display = 'flex';
      game.classList.add("active");
      game.style.opacity = '1';
    }, 500);

    rand_colorCombination(game_settings.difficulty_lv , game_settings.numberOfColors);
    console.log(game_settings.correct_colors_table);
    prepare_game_panel();
    }
    );

check_button.addEventListener('click', check);
newGame_button.addEventListener('click', () => {location.reload();});
