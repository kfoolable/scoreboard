let homescore = 0
let guestscore = 0

function btnh1() {
    homescore += 1
    document.getElementById("home-score").textContent = homescore
}

function btnh2() {
    homescore += 2
    document.getElementById("home-score").textContent = homescore
}

function btnh3() {
    homescore += 3
    document.getElementById("home-score").textContent = homescore
}

function reseth() {
    homescore = 0
    document.getElementById("home-score").textContent = homescore
}

function btng1() {
    guestscore += 1
    document.getElementById("guest-score").textContent = guestscore
}

function btng2() {
    guestscore += 2
    document.getElementById("guest-score").textContent = guestscore
}

function btng3() {
    guestscore += 3
    document.getElementById("guest-score").textContent = guestscore
}

function resetg() {
    guestscore = 0
    document.getElementById("guest-score").textContent = guestscore
}