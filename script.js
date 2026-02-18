const form = document.getElementById("signup-form");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const dismissBtn = document.getElementById("dismiss");

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

        document.querySelector("main").classList.add("success");
        document.getElementById("main-section").classList.add("hidden");
        document.getElementById("success-section").classList.remove("hidden");
        document.getElementById("success-msg").innerHTML = `A confirmation email has been sent to <strong>${emailValue}</strong>. 
        Please open it and click the button inside to confirm your subscription`;
    }
});

dismissBtn.addEventListener("click", () => {
    document.querySelector("main").classList.remove("success");
    document.getElementById("main-section").classList.remove("hidden");
    document.getElementById("success-section").classList.add("hidden");
});