<template>
  <div
    class="h-full text-white flex flex-col-reverse gap-4 lg:flex-row justify-center items-center"
  >
    <div class="max-w-2xl lg:basis-1/2">
      <h1 class="font-bold text-4xl md:text-6xl">
        I'm a Video Editor & Content Creator
      </h1>
      <p class="text-gray-500 my-2 break-words">
        An experienced and digital-savvy content creator with strong video
        production skills. Known for my clear and collaborative approach and my
        successes developing innovative strategies and content.
      </p>
      <a
        href="#portfolio"
        class="inline-flex box-border px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform duration-100 ease-in-out hover:scale-105"
        >Portfolio</a
      >
    </div>
    <img
      src="../assets/ykhan.jpeg"
      alt="Yasar Khan"
      class="max-h-96 max-w-xs rounded-xl transition-transform duration-150 ease-in hover:scale-105"
    />
  </div>
</template>

<script>
export default {
  name: "AppHomeSection",
};
</script>
