import { reactive } from "vue";

const htmlRef = document.querySelector("html");

export const themeStore = reactive({
  isDark: true,
  switchDark() {
    if (this.isDark) htmlRef.classList.remove("dark");
    else htmlRef.classList.add("dark");
    console.log("Method called");
    this.isDark = !this.isDark;
  },
});
