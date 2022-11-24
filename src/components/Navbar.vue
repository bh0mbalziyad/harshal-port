<template>
  <nav
    class="z-10 flex py-8 px-4 items-center bg-primary dark:bg-black fixed top-0 right-0 left-0"
  >
    <h1 class="text-4xl text-white font-bold tracking-wider">Yasar</h1>
    <div class="inline-flex items-center ml-auto">
      <ul class="hidden lg:flex gap-3">
        <a v-for="link in links" :key="link.link" :href="link.link">
          <li
            class="text-xl text-white font-light relative nav-link hover:after:w-full hover:cursor-pointer"
          >
            {{ link.name }}
          </li>
        </a>
      </ul>
      <img
        class="lg:hidden w-8 h-8 object-contain filter-to-white"
        src="../assets/bars.svg"
        alt="HamburgerMenu"
        @click="toggleSidenav"
      />
    </div>
    <!-- Side nav -->
    <Teleport to="#teleport-target">
      <Transition name="backdrop" appear>
        <div
          v-if="showNav"
          @click="toggleSidenav"
          class="fixed top-0 left-0 right-0 bg-black opacity-40 z-20 transition-all duration-150 lg:hidden h-screen"
        ></div>
      </Transition>
      <Transition name="sidenav" appear>
        <div
          v-if="showNav"
          class="fixed pt-52 flex flex-col items-center left-0 top-0 h-screen w-72 bg-primary dark:bg-black z-20 lg:hidden"
        >
          <!-- <h1 class="text-5xl text-white font-bold tracking-wider">Ziyad</h1> -->
          <ul class="mt-12">
            <a
              @click="closeNav"
              :key="link.link"
              v-for="link in links"
              :href="link.link"
            >
              <li
                class="text-xl text-white font-light relative nav-link hover:after:w-full hover:cursor-pointer w-min mt-6"
              >
                {{ link.name }}
              </li>
            </a>
          </ul>
        </div>
      </Transition>
    </Teleport>
  </nav>
</template>

<script setup>
import { ref } from "vue";
// import { themeStore } from "../stores/themeStore";
const links = ref([
  { name: "Home", link: "#Home" },
  { name: "About", link: "#about" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Experience", link: "#exp" },
  { name: "Contact", link: "#contact" },
]);

const showNav = ref(false);

function toggleSidenav() {
  const htmlRef = document.querySelector("html");
  const bodyRef = document.querySelector("body");

  // check incoming nav state

  // incoming state true, then add scroll to html/body
  if (showNav.value) {
    htmlRef.classList.remove("scroll-disable");
    bodyRef.classList.remove("scroll-disable");
  }
  // incoming state false, then remove scroll from html and body
  else {
    htmlRef.classList.add("scroll-disable");
    bodyRef.classList.add("scroll-disable");
  }
  showNav.value = !showNav.value;
}

function closeNav() {
  console.log("sidenav clicked");

  // add scroll back to html,body
  const htmlRef = document.querySelector("html");
  const bodyRef = document.querySelector("body");
  htmlRef.classList.remove("scroll-disable");
  bodyRef.classList.remove("scroll-disable");

  // close the sidenav

  showNav.value = false;
}
</script>

<script>
export default {
  name: "AppNavbar",
};
</script>

<style lang="scss" scoped>
.filter-to-white {
  filter: invert(100%) sepia(0%) saturate(7457%) hue-rotate(62deg)
    brightness(93%) contrast(108%);
}

.filter-black {
  filter: invert(0%) sepia(100%) saturate(7441%) hue-rotate(160deg)
    brightness(108%) contrast(114%);
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: white;
  transition: width 0.2s ease-in;
}

.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

.sidenav-enter-active,
.sidenav-leave-active {
  transition: transform 0.2s ease-in-out;
}

.sidenav-enter-from,
.sidenav-leave-to {
  transform: translateX(-100%);
}
</style>
