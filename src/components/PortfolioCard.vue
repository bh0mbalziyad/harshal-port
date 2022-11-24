<template>
  <article class="rounded-lg border border-gray-400 overflow-x-hidden">
    <div class="w-full h-48">
      <slot name="image"></slot>
    </div>
    <main class="flex w-full justify-between px-6 py-4">
      <slot name="btn1"></slot>
      <slot name="btn2"></slot>
    </main>
  </article>
</template>

<script>
export default {
  name: "PortfolioCard",
};
</script>

<style></style>
