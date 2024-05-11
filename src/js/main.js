//* Funcionalidad Header
let ubicacionPrincipal = window.scrollY;
window.onscroll = function () {
  let desplazamiento_Actual = window.scrollY;
  if (ubicacionPrincipal >= desplazamiento_Actual) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  ubicacionPrincipal = desplazamiento_Actual;
};

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

if (loginIsActive) {
  openLogin();
} else if (registerIsActive) {
  openRegister();
}

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
    if (loginIsActive) {
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
    if (loginIsActive) {
      closeLogin();
    } else {
      closeRegister();
    }
  });
});
