document.getElementById("btn").addEventListener("click", send);

function send() {
    let email = document.getElementById("email");
    let iconError = document.getElementById("icon-error");
    if (!email.checkValidity()) {
        document.getElementById("msg").innerHTML = "Please provide a valid email";
    } else {
        document.getElementById("msg").innerHTML = "";
    }
    email.style.border = "1px solid red";
    document.getElementById("email").value = "";
}