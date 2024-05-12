import { alertIsActive, openAlert, closeAlert } from "./Alert.js";

//* Ventana Modal Login/Register
const btnLogin = document.getElementById("btnLogin");
const modalLogin = document.getElementById("modalLogin");
const modalRegister = document.getElementById("modalRegister");
const btnChangeWindow = document.getElementsByClassName("btnChangeWindow");
const closeButtons = document.getElementsByClassName("closeButtons");

let loginIsActive = false;
let registerIsActive = false;

const openLogin = () => {
  modalLogin.classList.add("opacity-100");
  modalLogin.classList.add("pointer-events-auto");
  loginIsActive = true;
};

const openRegister = () => {
  modalRegister.classList.add("opacity-100");
  modalRegister.classList.add("pointer-events-auto");
  registerIsActive = true;
};

const closeLogin = () => {
  modalLogin.classList.remove("opacity-100");
  modalLogin.classList.remove("pointer-events-auto");
  loginIsActive = false;
};

const closeRegister = () => {
  modalRegister.classList.remove("opacity-100");
  modalRegister.classList.remove("pointer-events-auto");
  registerIsActive = false;
};

btnLogin.addEventListener("click", () => {
  openLogin();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (alertIsActive) {
      closeAlert();
    } else if (loginIsActive) {
      closeLogin();
    } else {
      closeRegister();
    }
  }
});

const changeWindow = () => {
  if (loginIsActive) {
    closeLogin();
    openRegister();
  } else {
    closeRegister();
    openLogin();
  }
};

const arrayBtnChangeWindow = Array.from(btnChangeWindow);
arrayBtnChangeWindow.forEach((element) => {
  element.addEventListener("click", () => {
    changeWindow();
  });
});

const arrayCloseButtons = Array.from(closeButtons);
arrayCloseButtons.forEach((element) => {
  element.addEventListener("click", () => {
    if (alertIsActive) {
      closeAlert();
    } else if (loginIsActive) {
      closeLogin();
    } else {
      closeRegister();
    }
  });
});

//* Form Login
const formLogin = document.getElementById("formLogin");
const inputsLogin = document.querySelectorAll("#formLogin input");
const botonEnviarLogin = document.getElementById("botonEnviarLogin");

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ0-9\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  //password de 6 a 15 caracteres, al menos una letra y un numero
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$/,
};

const validarLogin = (e) => {
  let emailValido = expresiones.email.test(inputsLogin[0].value.trim());
  let contraseñaValida = expresiones.password.test(inputsLogin[1].value.trim());
  if (inputsLogin[0].value === "" && inputsLogin[1].value === "") {
    openAlert("Error", "Los campos no pueden estar vacios");
  } else if (emailValido && contraseñaValida) {
    openAlert("Bienvenido", "Ha iniciado sesión");
    closeLogin();
  } else if (!emailValido) {
    openAlert(
      "Error",
      "El correo es invalido, recuerda que la estructura es usuario@dominio.com"
    );
  } else {
    openAlert(
      "Error",
      "La contraseña debe de contener de 6 a 15 carácteres, al menos una letra o un numero"
    );
  }
};

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  validarLogin(e);
  console.log(e);
});

//* Form Register
const formRegister = document.getElementById("formRegister");
const inputsRegister = document.querySelectorAll("#formRegister input");
const botonEnviarRegistro = document.getElementById("botonEnviarRegistro");

const validarRegistro = (e) => {
  let nombreValido = expresiones.nombre.test(inputsRegister[0].value.trim());
  let emailValido = expresiones.email.test(inputsRegister[1].value.trim());
  let contraseñaValida = expresiones.password.test(
    inputsRegister[2].value.trim()
  );
  if (nombreValido && emailValido && contraseñaValida) {
    openAlert("Bienvenido", "Ha registrado su cuenta");
    closeRegister();
  } else if (
    inputsRegister[0].value === "" &&
    inputsRegister[1].value === "" &&
    inputsRegister[2].value === ""
  ) {
    openAlert("Error", "Los campos no pueden estar vacios");
  } else if (!nombreValido) {
    openAlert(
      "Error",
      "El nombre no puede contener numeros ni pasar los 50 carácteres"
    );
  } else if (!emailValido) {
    openAlert(
      "Error",
      "El correo es invalido, recuerda que la estructura es usuario@dominio.com"
    );
  } else {
    openAlert(
      "Error",
      "La contraseña debe de contener de 6 a 15 carácteres, al menos una letra o un numero"
    );
  }
};

formRegister.addEventListener("submit", (e) => {
  e.preventDefault();
  validarRegistro(e);
});
