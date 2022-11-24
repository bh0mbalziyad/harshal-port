<template>
  <Teleport to="#teleport-target">
    <Transition name="backdrop" appear>
      <div
        v-if="snackbarStore.snackbarOpen"
        @click="onBackdropClicked"
        class="fixed top-0 left-0 right-0 bg-black opacity-40 z-20 transition-all duration-150 h-screen"
      ></div>
    </Transition>
    <Transition name="snackbar" appear>
      <div
        v-if="snackbarStore.snackbarOpen"
        class="fixed flex flex-col items-center justify-center left-0 bottom-0 h-[200px] w-screen bg-primary dark:bg-black z-20"
      >
        <Exclamation />
        <div class="p-2" />
        <p class="text-white">{{ snackbarStore.snackbarText }}</p>
        <Close @on-close-clicked="handleCloseClicked" />
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { snackbarStore } from "@/stores/snackbarStore";
import Exclamation from "@/assets/components/Exclamation.vue";
import Close from "@/assets/components/Close.vue";

export default {
  name: "AppSnackbar",
  data() {
    return {
      snackbarStore,
    };
  },
  methods: {
    onBackdropClicked() {
      this.snackbarStore.setSnackbar(false, "");
    },
    handleCloseClicked() {
      this.snackbarStore.setSnackbar(false, "");
    },
  },
  components: { Exclamation, Close },
};
</script>

<style scoped>
.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

.snackbar-enter-from,
.snackbar-leave-to {
  transform: translateY(100%);
}

.snackbar-enter-active,
.snackbar-leave-active {
  /* transition: opacity 0.2s ease-in-out; */
  transition: transform 0.2s ease-in-out;
}
</style>
