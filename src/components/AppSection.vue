<template>
  <section
    :class="computeStyles"
    class="bg-white px-3 md:px-4 dark:bg-gradient-to-b dark:from-black dark:to-gray-800"
  >
    <slot>Content goes here</slot>
  </section>
</template>

<script>
export default {
  name: "AppSection",
  props: { flip: Boolean, fullscreen: Boolean },
  computed: {
    computeStyles() {
      return {
        "dark:from-gray-800": this.flip,
        "dark:from-black": !this.flip,
        "dark:to-black": this.flip,
        "dark:to-gray-800": !this.flip,
        "app-section": this.fullscreen,
      };
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 1024px) {
  .app-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}

@media only screen and (min-width: 1024px) {
  .app-section {
    /* height: 1px; */
    height: calc(100vh - 104px);
  }
}
</style>
