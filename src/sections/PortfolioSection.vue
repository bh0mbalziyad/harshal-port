<template>
  <div
    class="h-full text-white max-w-5xl px-1 mx-auto flex flex-col justify-center items-center"
  >
    <h2
      class="font-bold text-4xl pb-2 border-b-gray-500 border-b-4 mb-4 self-start"
    >
      Portfolio
    </h2>

    <p class="self-start font-thin text-xl mb-10">
      Check out some of my work here
    </p>

    <div ref="slider" class="keen-slider mx-6">
      <!-- <div class="keen-slider__slide">
        <PortfolioCard>
          <template #image>
            <img
              class="object-contain h-full w-full transition-transform duration-100 ease-in hover:scale-110"
              src="../assets/portfolio/hackstrap1.png"
              alt="Hackstrap"
            />
          </template>
          <template #btn1>
            <AppButton
              disabled
              tooltip="This site has been taken down by the owner"
            >
              <h2 class="text-lg">Checkout!</h2>
            </AppButton>
          </template>
          <template #btn2>
            <AppButton
              disabled
              tooltip="The code is propietary and has been handed over"
            >
              <h2 class="text-lg">Code</h2>
            </AppButton>
          </template>
        </PortfolioCard>
      </div> -->
      <div class="keen-slider__slide">
        <PortfolioCard>
          <template #image>
            <img
              class="object-contain h-full w-full transition-transform duration-100 ease-in hover:scale-110"
              src="../assets/portfolio/pepperfry.png"
              alt="Pepperfry"
            />
          </template>
          <template #btn1>
            <a target="_blank" href="https://www.pepperfry.com">
              <AppButton>
                <h2 class="text-lg">Checkout!</h2>
              </AppButton>
            </a>
          </template>
          <!-- <template #btn2>
            <a
              target="_blank"
              href="https://github.com/bh0mbalziyad/Captain-Kio"
            >
              <AppButton>
                <h2 class="text-lg">Code</h2>
              </AppButton>
            </a>
          </template> -->
        </PortfolioCard>
      </div>
      <div class="keen-slider__slide">
        <PortfolioCard>
          <template #image>
            <img
              class="object-contain h-full w-full transition-transform duration-100 ease-in hover:scale-110"
              src="../assets/portfolio/mobilebooster.png"
              alt="Hackstrap"
            />
          </template>
          <template #btn1>
            <a target="_blank" href="https://mobilebooster.in">
              <AppButton>
                <h2 class="text-lg">Checkout!</h2>
              </AppButton>
            </a>
          </template>
          <!-- <template #btn2>
            <AppButton
              disabled
              tooltip="The code is propietary and has been handed over"
            >
              <h2 class="text-lg">Code</h2>
            </AppButton>
          </template> -->
        </PortfolioCard>
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
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import PortfolioCard from "../components/PortfolioCard.vue";
import AppButton from "@/components/AppButton.vue";
import MotionArrow from "../assets/components/MotionArrow.vue";

export default {
  name: "PortfolioSection",
  components: { PortfolioCard, AppButton, MotionArrow },
  mounted() {
    this.slider = new KeenSlider(this.$refs.slider, {
      breakpoints: {
        "(min-width: 630px)": {
          slides: { perView: 2, spacing: 5 },
        },
      },
      slides: { perView: 1 },
    });
  },
};
</script>

<style scoped>
@media only screen and (min-width: 630px) {
  div[role="helper"] {
    display: none;
  }
}
</style>
