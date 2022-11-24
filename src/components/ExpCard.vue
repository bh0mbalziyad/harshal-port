<template>
  <article :class="borderColor" class="mb-2 py-10 border rounded-md">
    <div class="mx-auto w-20 h-20">
      <slot>missing an image tag?</slot>
    </div>
    <main>
      <h3 class="text-center font-thin text-xl mt-4">{{ title }}</h3>
    </main>
  </article>
</template>

<script>
export default {
  name: "ExpCard",
  props: {
    title: String,
    borderColor: String,
  },
};
</script>
