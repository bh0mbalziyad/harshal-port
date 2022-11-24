<template>
  <button
    class="inline-flex box-border px-6 py-3 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500"
    @click="onBtnClick"
    :type="type"
    :class="{ disabled: this.disabled }"
  >
    <slot></slot>
  </button>
</template>

<script>
import { snackbarStore } from "@/stores/snackbarStore";

export default {
  name: "AppButton",
  props: {
    type: String,
    disabled: Boolean,
    tooltip: {
      type: String,
      default: "Disabled",
    },
  },
  data() {
    return {
      snackbarStore,
    };
  },
  methods: {
    onBtnClick() {
      if (this.disabled) {
        this.snackbarStore.setSnackbar(true, this.tooltip);
      }
    },
  },
};
</script>

<style scoped>
button.disabled {
  background-color: gray !important;
  background-image: none;
}
</style>
