let user_choise = "";
let compuetr_choise = "";
let com_input= 0 ;
let places_left = [];
let check_draw = false ;

const game_board = document.querySelector("#game_board");
const cell_elements = document.querySelectorAll('.cell') ;
const chuse = document.querySelector('.chuse') ;
const winning_combination = [
                                [0,1,2],
                                [3,4,5],
                                [6,7,8],
                                [0,3,6],
                                [1,4,7],
                                [2,5,8],
                                [0,4,8],
                                [2,4,6]
                            ]
                            
// Check if player chuse cross
const cross = () => {
    user_choise = "close" ; 
    compuetr_choise = "circle" ;
    chuse.style.display = "none";
}

// Check if player chuse circle
const circle = () => {
    user_choise = "circle" ;
    compuetr_choise = "close" ;
    chuse.style.display = "none";
}

// Plot the cells for both computer and user
const plot_choise = (cell , colour , text) => {
    cell.classList.remove("cell");
    cell.classList.add("glass"); 
    cell.classList.add("material-icons");  
    cell.classList.add("chosen_cell");
    cell.style.backgroundColor = colour ;
    cell.innerText = text ;
}

const check_win = () => {
    // Check if deow condition match
    if(check_draw ) draw() ;

    // Check if winn or loss condition match
    for (let i=0 ; i<8 ; i++) {
        // Check 2 cels
        let a = cell_elements[ winning_combination[i][0] ].innerText;
        let b = cell_elements[ winning_combination[i][1] ].innerText;
        let c = cell_elements[ winning_combination[i][2] ].innerText;
        if (a === b  && b===c) {
            // Player won or lose
            if (a === user_choise) win() ;

            if( a === compuetr_choise) lose() ;
        }
    }
}

const play = (e) => {
    // for user input 
    const user_cell = e.target ;
    // Plot the cells for user
    plot_choise(user_cell , "green" , user_choise);

    // for computer input
    // To check for all the empty places
    for ( let i = 0 ;  i < 8 ;  i ++) {
        if(cell_elements[ i ].classList.contains("cell")) {
            places_left.push( i );
        }
    }

    //Check if Draw
    check_draw = ( places_left.length > 0 ) ? false : true ;

    //Check winn loss drow
    check_win();

    // Randumly take one item from the list
    var com_input = places_left[Math.floor(Math.random() * places_left.length)];

    // Place the computer input
    plot_choise( cell_elements[ com_input ] , "red" , compuetr_choise);

    // to empty the array to pot the list of empty cell for next click
    places_left.splice(0, places_left.length) ;
}
// To check click on any cell
cell_elements.forEach( e => {
    e.addEventListener('click', play, { once:true })
})