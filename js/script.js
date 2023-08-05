const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailinput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  event.preventDefault();

  if (nameInput.value === "") {
    alert("Insert your name");
    return;
  }

  if (emailinput.value === "" || !emailValidation(emailinput.value)) {
    alert("insert your e-mail");
    return;
  }

  if (!passwordValidation(passwordInput.value, 8)) {
    return;
  }
  if (messageTextarea.value === "") {
    alert("dont leave message area blank");
    return;
  }

  form.submit();
});

function emailValidation(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}

function passwordValidation(password, minChars) {
  if (password.length >= minChars) {
    return true;
  }
  alert("You need a password of at least 8 digits");
  return false;
}
