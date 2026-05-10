let button = document.querySelector("button");

button.addEventListener("click", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("message").innerHTML =
        "Welcome to Pompeii, " + name + "!";
});