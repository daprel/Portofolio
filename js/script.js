welcomeMessage();

function welcomeMessage() {
    //let userName = prompt("Please enter your name:");
    let userName = "Guest";

    if (userName == '' || userName == null) {
        userName = "Guest";
    }
    document.getElementById("welcome-speech").innerText = "Welcome, " + userName + "!";
    console.log("Welcome," + userName + "!");
}

function validateForm(e) {
    e.preventDefault(); // cegah reload

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === '' || email === '' || message === '') {
    alert('Nama, email, dan pesan wajib diisi.');
    return;
  }

    document.getElementById("output").innerText = "Halo! " + name + " dengan email " + email + "\n Pesan Anda: " + message + " (pesan kamu baru nyampe sini karena webnya belum jadi <3)";
    console.log("Halo!" + name + "dengan email " + email + " Pesan Anda: " + message);
}