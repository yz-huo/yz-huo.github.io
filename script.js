document.addEventListener("DOMContentLoaded", () => {
    const options = ["rock", "paper", "scissors"];

    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            const userchoice = button.id;
            const computer = options[Math.floor(Math.random() * 3)];
            const results = calculatewinner(userchoice, computer);
            // make 2 variables about the scores
            // the outputs (the overall score) and inputs (the score itself & results) necessary
            // are going to increase or decrease
        
            document.getElementById("results").innerText =
                    `You chose ${userchoice}. Computer chose ${computer}. ${results}`;
                });
              });


    function calculatewinner(userchoice, computer){
        if (computer == userchoice)
        { return "draw!"; }
        if (computer == "rock" && userchoice == "paper")
            { return "You win!"; }
        if (computer == "paper" && userchoice == "scissors")
            { return "You win!"; }
        if (computer == "scissors" && userchoice == "rock")
            { return "You win!"; }
        else
            { return "You lose!"; }
    // add the overall score here
    }
});
