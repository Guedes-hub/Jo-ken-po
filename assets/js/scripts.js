
const result = document.querySelector('.result')
const humanScore = document.querySelector('.span-your')
const machineScore = document.querySelector('.span-machine')

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}


const playMachine = () => {
    const choises = ['rock', 'paper', 'scissors']

    const randomNumber = Math.floor(Math.random() * 3)

    console.log(randomNumber)

    return choises[randomNumber]
}



const playTheGame = (human, machine) => {


    if (human === machine) {
        result.innerHTML = "Deu empate 👀"
    }

    else if (human === 'paper' && machine === 'rock' || human === 'rock' && machine === 'scissors' || human === 'scissors' && machine === 'paper') {


        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber

        result.innerHTML = "Você ganhou 🏆"

    }

    else {


        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber

        result.innerHTML = "Machine win 👎"

    }

}