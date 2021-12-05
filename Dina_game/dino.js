let last_render_time = 0;
const speed = 4;
let score_count = 0 ;
const me = document.querySelector(".me");
const board = document.querySelector(".board");
const jump_button = document.querySelector(".jump_button");
const obstacles = ["home","apartment","child_friendly","park","skateboarding","local_shipping","toys"];
const obstacle = document.querySelector(".obstacle");
const player_score = document.querySelector(".score");

const is_alife = () => {
    let player_top = parseInt(window.getComputedStyle(me).getPropertyValue("top"));
    // let player_bottom = parseInt(window.getComputedStyle(me).getPropertyValue("bottom"));
    //let player_left = parseInt(window.getComputedStyle(me).getPropertyValue("left"));
    //let obstacle_top = parseInt( window.getComputedStyle(obstacle).getPropertyValue("top") );
    let obstacle_left = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left") );

    if (obstacle_left < 50 && obstacle_left > 0 &&  player_top >= 180) {
        // obstacle.style.animation = "";
        // me.style.color = "red";
        // obstacle.style.color = "red";
        // score(score_count);
        console.log("boom");
    }
}

const jump_animation = () => {
    anime({
        targets: me,
        translateY: [0, -(board.clientHeight / 3) ], 
        direction: 'alternate',
        scale: 2,
        duration: 200
        // rotate: '1turn'
      });
}

// To check when the user press the space bar
document.addEventListener('keydown', e => {
    if (e.key === " ") {
        jump_animation();
    }
})

// The main fnction
const start = (current_time) => {
    window.requestAnimationFrame( start );
    const secondsSinceLastRender = (current_time - last_render_time) / 1000 ;
    if (secondsSinceLastRender < 1 / speed) return
    last_render_time = current_time ;

    obstacle.innerText = obstacles[ Math.floor(Math.random() * obstacles.length) ];   
    player_score.innerText = score_count ;
    is_alife();
}

//Decide to display control botton or not
if ( os() === "Android" ) {
    jump_button.style.display = "flex";
}

obstacle.style.animation = "animate_obstacle 1s linear infinite";
start();
