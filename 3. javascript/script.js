let button = document.querySelector("button");

button.addEventListener("click", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    if (name === "") {
        document.getElementById("message").innerHTML =
            "Please enter your name.";
    } else {
        document.getElementById("message").innerHTML =
            "Welcome to Pompeii, " + name + "!";
    }
});