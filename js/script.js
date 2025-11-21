welcomeMessage();

function welcomeMessage() {
    let userName = prompt("Please enter your name:");

    if (userName == '' || userName == null) {
        userName = "Guest";
    }
    document.getElementById("welcome-speech").innerText = "Welcome, " + userName + "!";
    console.log("Welcome," + userName + "!");
}

function validateForm() {

}