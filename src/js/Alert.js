const modalAlert = document.getElementById("modalError");
const titleAlert = document.getElementById("titleError");
const msgAlert = document.getElementById("msgError");

let alertIsActive = false;

const showModal = (modal) => {
  modal.classList.add("opacity-100");
  modal.classList.add("pointer-events-auto");
};

const openAlert = (title, msg) => {
  showModal(modalAlert);
  titleAlert.innerText = title;
  msgAlert.innerText = msg;
  alertIsActive = true;
};

const closeAlert = () => {
  modalAlert.classList.remove("opacity-100");
  modalAlert.classList.remove("pointer-events-auto");
  alertIsActive = false;
};

export { alertIsActive, showModal, openAlert, closeAlert };
