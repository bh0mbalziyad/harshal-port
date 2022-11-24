import { reactive } from "vue";

const htmlRef = document.querySelector("html");
const bodyRef = document.querySelector("body");

export const snackbarStore = reactive({
  snackbarOpen: false,
  snackbarText: "The owner of the site has taken it down.",
  setSnackbar(show, text) {
    // snackbar to be shown
    if (show) {
      bodyRef.classList.add("scroll-disable");
      htmlRef.classList.add("scroll-disable");
    }
    // snackbar to be closed
    else {
      bodyRef.classList.remove("scroll-disable");
      htmlRef.classList.remove("scroll-disable");
    }

    this.snackbarOpen = show;
    this.snackbarText = text;
  },
});
