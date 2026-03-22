const inputs = document.querySelectorAll(".otp-input");
const container = document.querySelector(".otp-container");
const resendBtn = document.getElementById("resend-btn");
const continueBtn = document.getElementById("continue-btn");
const feedback = document.getElementById("feedback-ui");

inputs.forEach((input, i) => {
  input.addEventListener("input", (e) => {
    if (!/^\d$/.test(e.target.value)) {
      e.target.value = "";
      return;
    }
    if (e.target.value && i < inputs.length - 1) inputs[i + 1].focus();

    if ([...inputs].every((inp) => inp.value)) {
      setTimeout(() => {
        container.style.display = "none";
        resendBtn.style.display = "none";
        feedback.classList.remove("hidden");
      }, 400);
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && i > 0) {
      inputs[i - 1].focus();
    }
  });
});

continueBtn.addEventListener("click", () => {
  feedback.classList.add("hidden");
  container.style.display = "flex";
  resendBtn.style.display = "flex";
  inputs.forEach((inp) => (inp.value = ""));
  inputs[0].focus();
});

inputs[0].focus();
