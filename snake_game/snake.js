let game_over_chaker = false ;
const GRID_SIZE = 21
let last_render_time = 0;
const snack_speed = 5;
const snake_body = [{x:14, y:11}];
const food_position = {x:8, y:11};
let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }
const game_board = document.getElementById("game_board");
const button_contaner = document.querySelector('.button_contaner') ;

// Take decusion depending upon the input from website button
const snake_move_up = () => {
    inputDirection = { x: 0, y: -1 };
}
const snake_move_left = () => {
    inputDirection = { x: -1, y: 0 };
}
const snake_move_right = () => {
    inputDirection = { x: 1, y: 0 };
}
const snake_move_down = () => {
    inputDirection = { x: 0, y: 1 };
}
const snake_move_stop = () => {
    inputDirection = { x: 0, y: 0 };
}

// Take decusion depending upon the input from keyboard
window.addEventListener('keydown', e => {
    switch (e.key) {
      case 'ArrowUp':
        inputDirection = { x: 0, y: -1 };
        break;
      case 'ArrowDown':
        inputDirection = { x: 0, y: 1 };
        break;
      case 'ArrowLeft':
        inputDirection = { x: -1, y: 0 };
        break;
      case 'ArrowRight':
        inputDirection = { x: 1, y: 0 };
        break;
    }
})

// To add motion to the snake
const update_snake = () => {
    // To add motion to the full snake body 
    for( let i = snake_body.length-2 ; i>=0 ; i--){
        snake_body[i+1] = {...snake_body[i]};
    }
    // add motion depending upon the input
    snake_body[0].x += inputDirection.x;
    snake_body[0].y += inputDirection.y;
}

// Put new food on the board and increase the length of the snake 
// whwn snake eat the food
const update_food = () => {
    snake_body.forEach( position => {
        // To check of the snake eat the food
        if(position.x === food_position.x && position.y === food_position.y) {
            // To increase the size of the snake
            snake_body.push( { ...snake_body[snake_body.length  ]} ) ;
            // To place the food in randum position
            food_position.x = Math.floor(Math.random() * GRID_SIZE) + 1;
            food_position.y = Math.floor(Math.random() * GRID_SIZE) + 1;
        }
    })
}

// To put the snake and the food position om the board
const draw_snake_food = (game_board) => {
    // To put the snake body on the board
    snake_body.forEach( position => {
        const snake_element = document.createElement("div");
        snake_element.style.gridRowStart = position.y;       
        snake_element.style.gridColumnStart = position.x;        
        snake_element.classList.add("snake");      
        game_board.appendChild(snake_element);
    })
    // To put the food on the board
    const food_element = document.createElement("div");
    food_element.style.gridRowStart = food_position.y;       
    food_element.style.gridColumnStart = food_position.x;      
    food_element.classList.add("food");       
    game_board.appendChild(food_element);
}

// To check when the player looses
const game_over = () => {
    // if the scake tuch the boundary
    snake_body.forEach( position => {
        if( position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE ) {
            game_over_chaker = true ;
        }
    })
    // if the snake head tuch it's own body
    if(snake_body.length > 1) {  
        for( let i=1 ; i<snake_body.length ; i++) {
            if(snake_body[0].x == snake_body[i].x && snake_body[0].y == snake_body[i].y){
                game_over_chaker = true ;
            }
        }
    }
}

// The main fnction
const play_sneck_game = (current_time) => {
    // Calling the main function depanding upon the responce
    window.requestAnimationFrame( play_sneck_game );
    const secondsSinceLastRender = (current_time - last_render_time) / 1000 ;
    if (secondsSinceLastRender < 1 / snack_speed) return
    last_render_time = current_time ;

    game_board.innerHTML = "";
    update_snake();
    update_food();
    draw_snake_food(game_board);
    game_over();

    if(game_over_chaker) {
        score(snake_body.length-1);
    }
    
    console.log( "Snake length : " + snake_body.length);
}

//Decide to display control botton or not
if ("Android" === os() ) {
    button_contaner.style.display = "flex";
}

//Starte the game
play_sneck_game();