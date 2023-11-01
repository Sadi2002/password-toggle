const inputPassword = document.querySelector(".password");
const eyeSlash = document.querySelector(".fa-eye-slash");
const eye = document.querySelector(".fa-eye");

const changeType = function () {
  inputPassword.type = inputPassword.type === "password" ? "text" : "password";
  eyeSlash.classList.toggle("hide");
  eye.classList.toggle("hide");
};

eyeSlash.addEventListener("click", changeType);
eye.addEventListener("click", changeType);
