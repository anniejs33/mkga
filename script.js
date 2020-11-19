const KANYE_URL = 'https://api.kanye.rest/';
const TRUMP_URL = 'https://api.tronalddump.io/random/quote';
const KEY_TRUMP = "trump";
const KEY_WEST = "west";
let answer = 0;

function init() {

    //function to initialize once user enters webpage
    //function will display a quote at random accessing Kanye API and Trump API

    let intRandom = Math.floor(Math.random() * 2);
    if (intRandom === 0) {
        fetch (TRUMP_URL)
            .then ((response) => {
                return response.json();
            })
            .then((data) => {
                document.querySelector("blockquote").innerHTML = data.value;
                answer = KEY_TRUMP;
            })
    } else {
        fetch (KANYE_URL)
            .then ((response) => {
                return response.json();
            })
            .then((data) => {
                document.querySelector("blockquote").innerHTML = data.quote;
                answer = KEY_WEST;
            })        
    }

    //add the function to each of the buttons
    document.querySelectorAll(".options").forEach(btn => {
        btn.addEventListener('click', event => {
            checkAnswer(event.target.value);
        })
    })

    document.querySelector(".nxtQuote").addEventListener('click', event => {
        location.reload();
    })
}

init();

function checkAnswer(value) {
    //validate the users answer and display
    let recordedAnswer = 0;
    if (answer === value) {
        recordedAnswer = "You're right!";
    } else {
        recordedAnswer = "You're wrong!";
    }
    if (answer === KEY_TRUMP) {
        recordedAnswer = recordedAnswer + " Trump said it!";
    } else {
        recordedAnswer = recordedAnswer + " Kanye said it!";
    }

    document.querySelector(".dpAnswer").innerHTML = recordedAnswer;

    document.querySelector(".choice").classList.add("hiding");
    document.querySelector(".finalAnswer").classList.remove("hiding");
}
