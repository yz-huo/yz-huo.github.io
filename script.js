document.addEventListener("DOMContentLoaded", () => {
    const options = ["rock", "paper", "scissors"];

    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            const userchoice = button.id;
            const computer = options[Math.floor(Math.random() * 3)];
            const result = calculatewinner(userchoice, computer);

            document.getElementById("results").innerText =
                    `You chose ${userchoice}. Computer chose ${computer}. ${result}`;
                });
              });


    function calculatewinner(userchoice, computer){
        if (computer == userchoice):
        return "draw";
    elif (computer == "rock")& (userchoice == "paper"):
        return "you win";
    elif (computer == "rock")& (userchoice == "scissors"):
        return "you lose";
    elif (computer == "paper")& (userchoice == "rock"):
        return "you lose";
    elif (computer == "paper")& (userchoice == "scissors"):
        return "you win";
    elif (computer == "scissors")& (userchoice == "rock"):
        return "you win";
    elif (computer == "scissors")& (userchoice == "paper"):
        return "you lose";
    }
});
