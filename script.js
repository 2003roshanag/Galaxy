// Redirect to the invite page with name
function redirectToInvite() {
    let name = document.getElementById("nameInput").value.trim();
    if (name) {
        localStorage.setItem("guestName", name);
        window.location.href = "invite.html";
    } else {
        alert("Please enter your name!");
    }
}

// Display personalized greeting
document.addEventListener("DOMContentLoaded", function () {
    let name = localStorage.getItem("guestName");
    if (name) {
        document.getElementById("greeting").innerText = `Hello ${name},`;
    }
});
