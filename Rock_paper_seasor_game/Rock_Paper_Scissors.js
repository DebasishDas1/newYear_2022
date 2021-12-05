// Rock paper scissers game 
const rps = () => {
    let plauerScore = 0;
    let computerScore = 0;
    const winner = document.querySelector(".winner");
    const prScore = document.querySelector(".playerScore");
    const cScore = document.querySelector(".computerScore");

    // If player wins
    const player = () => {
        winner.textContent = "Player wins";
        plauerScore = plauerScore + 1 ;
        prScore.textContent = plauerScore;
        if(plauerScore > 4) {
            win();
        }
        return;
    }

    // If computer wins
    const computer = () => {
        winner.textContent = "Computer wins";
        computerScore = computerScore + 1;
        cScore.textContent = computerScore ;
        if(computerScore > 4) {
            lose();
        }
        return;
    }

    // Rock paper scissers game logic
    const play = () => {
        const playerHand = document.querySelector(".playerBlock");
        const computerrHand = document.querySelector(".pcBlock");
        const rock = document.querySelector(".rock");
        const paper = document.querySelector(".paper");
        const sciccors = document.querySelector(".sciccors");

        const opotions = ['rock' , 'paper' , 'scissors'];

        // If player select rock
        rock.addEventListener("click", () => {
            playerHand.src=`../img/rock.png`;    
            const optionNumber = Math.floor(Math.random() * 3) ;
            if(opotions[optionNumber] === "rock") {
                winner.textContent = 'It is a tie';
                computerrHand.src=`../img/rock.png`;
                return;
            }
            if(opotions[optionNumber] === "scissors") {
                computerrHand.src="../img/scissor.png";
                player();
            }
            else {
                computerrHand.src="../img/paper.png";
                computer();
            }       
        });

        // If player select paper
        paper.addEventListener("click", () => {
            playerHand.src="../img/paper.png";
            const optionNumber = Math.floor(Math.random() * 3) ;
            if(opotions[optionNumber] === "paper") {
                computerrHand.src="../img/paper.png";
                winner.innerHTML = 'It is a tie';
                return;
            }
            if(opotions[optionNumber] === "scissors") {
                computerrHand.src="../img/scissor.png";
                computer();
            }
            else {
                computerrHand.src=`../img/rock.png`;
                player();
            }
        });

        // If player select sciccors
        sciccors.addEventListener("click", () => {
            playerHand.src="../img/scissor.png";
            const optionNumber = Math.floor(Math.random() * 3) ;
            if(opotions[optionNumber] === "scissors") {
                computerrHand.src="../img/scissor.png";
                winner.innerHTML = 'It is a tie';
                return;
            }
            if(opotions[optionNumber] === "rock") {
                computerrHand.src=`../img/rock.png`;
                computer();
            }
            else {
                computerrHand.src="../img/paper.png";
                player();
            }
        });
    }

    play();
}

rps();