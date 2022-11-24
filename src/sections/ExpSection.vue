<template>
  <div
    class="h-full text-white max-w-5xl px-1 mx-auto flex flex-col justify-center items-center"
  >
    <h2
      class="font-bold text-4xl pb-2 border-b-gray-500 border-b-4 mb-4 self-start"
    >
      Experience
    </h2>

    <p class="self-start font-thin text-xl mb-12">
      These are some of the domains I've worked in
    </p>
    <div ref="slider" class="keen-slider">
      <div class="keen-slider__slide">
        <ExpCard title="SEO" borderColor="border-orange-500">
          <img
            src="../assets/exp/seo.png"
            class="w-full h-full object-contain"
          />
        </ExpCard>
        <ExpCard title="Social Media Marketing" borderColor="border-blue-600">
          <img
            src="../assets/exp/social-media.png"
            class="w-full h-full object-contain"
          />
        </ExpCard>
        <ExpCard title="Communications" borderColor="border-pink-400">
          <img
            src="../assets/exp/communication.png"
            class="w-full h-full object-contain"
          />
        </ExpCard>
      </div>
      <div class="keen-slider__slide">
        <ExpCard title="Influencer Marketing" borderColor="border-blue-500">
          <img
            src="../assets/exp/network.png"
            class="w-full h-full object-contain"
          />
        </ExpCard>

        <ExpCard title="Advertising" borderColor="border-sky-400">
          <img
            src="../assets/exp/video-ad.png"
            class="w-full h-full object-contain"
          />
        </ExpCard>
      </div>
      <div class="keen-slider__slide">
        <ExpCard title="Public Relations" borderColor="border-yellow-500">
          <img
            src="../assets/exp/public-relation.png"
            class="w-full h-full object-contain"
          />
        </ExpCard>
        <ExpCard title="Content" borderColor="border-white">
          <img
            src="../assets/exp/writer.png"
            class="w-full h-full object-contain"
          />
        </ExpCard>
      </div>
    </div>

    <div role="helper" class="mt-6">
      <p class="inline-flex gap-4 items-center">
        Swipe to see more <span><MotionArrow /></span>
      </p>
    </div>
  </div>
</template>

<script>
// TODO add exp cards and keen slider
import ExpCard from "../components/ExpCard.vue";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import MotionArrow from "../assets/components/MotionArrow.vue";

export default {
  name: "ExpSection",
  components: { ExpCard, MotionArrow },
  mounted() {
    this.slider = new KeenSlider(this.$refs.slider, {
      breakpoints: {
        "(min-width: 630px)": {
          slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 10 },
        },
      },
      slides: { perView: 1 },
    });
  },
};
</script>

<style scoped>
@media only screen and (min-width: 1000px) {
  div[role="helper"] {
    display: none;
  }
}
</style>
