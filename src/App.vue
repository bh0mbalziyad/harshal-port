<script>
import Navbar from "@/components/Navbar.vue";
import Snackbar from "@/components/Snackbar.vue";
import { themeStore } from "@/stores/themeStore";
import SideSticky from "@/components/SideSticky.vue";

export default {
  name: "PortfolioApp",
  components: { Navbar, SideSticky, Snackbar },
  data: () => {
    return {
      themeStore,
    };
  },
  mounted: () => {
    if (themeStore.isDark) {
      console.log("adding dark on mount");
      document.querySelector("html").classList.add("dark");
    } else {
      console.log("removing dark on mount");
      document.querySelector("html").classList.remove("dark");
    }
  },
};
</script>

<template>
  <Navbar />
  <SideSticky />
  <Snackbar />
  <RouterView />
</template>

<style scoped></style>
