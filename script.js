
let random = Math.round(Math.random() * 100) + 1;
console.log(random);
let attempts = 10;

const input = document.getElementById('input');
const message = document.getElementById('message');
const attemptCount = document.querySelector("#attemptCount");

function Guess() {
    const userGuess = parseInt(input.value);
    if (userGuess === random) {
        message.textContent = "You Win the number guess game 👍👍👍";
        // attemptCount

    }
    else if (userGuess < random) {
        message.textContent = " Too Low !";
    }
    else if (userGuess > random) {
        message.textContent = " Too High !";
    }


    attempts--;
    if (attempts === 0) {
        message.textContent = " ";
        message.textContent = `You lose the number guess game please try again 🫵🫵🫵 the number is ${random}`;
    }
    attemptCount.textContent = attempts;



}
function Reset() {
    window.location.reload();
}


