const form = document.getElementById("signup-form");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailValue = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        errorMsg.textContent = "Valid email required";
        email.classList.add("error");
    }
    else {
        errorMsg.textContent = "";
        email.classList.remove("error");
    }
});