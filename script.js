// Getting all Response Menu Items
const burger = document.querySelector(".navbar-burger");
const menu = document.querySelector(".navbar-menu");

if (burger !== null) {
  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
}

// Getting all Modals, close and trigger buttons.
const modals = document.querySelectorAll(".modal");
const closeBtn = document.querySelectorAll(".modal-close");
const openBtn = document.querySelectorAll(".modal-trigger");

// For Success Notification
let successMessage = document.querySelector(".modal-success-notification");

// Adding Event Listeners
if (openBtn.length > 0) {
  openBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      document.getElementById(this.dataset.target).classList.add("is-active");
    });
  });
}

// Adding Event Listeners to close buttons
if (closeBtn.length > 0) {
  closeBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      modals.forEach((modal) => {
        modal.classList.remove("is-active");
        // Hiding Success Notification on Closing Modal
        successMessage.classList.add("is-hidden");
      });
    });
  });
}

// Showing Success Notification
var sendBugReport = document.querySelector(".send-bug-report");

if (sendBugReport !== null) {
  sendBugReport.addEventListener("click", function () {
    successMessage.classList.remove("is-hidden");
  });
}

// Closing Success Notification
let closeNotification = document.querySelector(".close-notification");

if (closeNotification > 0) {
  closeNotification.forEach((closeIcon) => {
    closeIcon.classList.add("is-hidden");
  });
}

// Deleting a book
let deleteItem = document.querySelectorAll(".delete-item");
if (deleteItem.length > 0) {
  deleteItem.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", function () {
      deleteBtn.closest(".column").remove();
    });
  });
}

// Deleting a customer
let deleteCustomer = document.querySelectorAll(".delete-customer");
if (deleteCustomer.length > 0) {
  deleteCustomer.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", function () {
      deleteBtn.closest("tr").remove();
    });
  });
}
