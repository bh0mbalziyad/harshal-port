<template>
  <div id="fake-body" class="fake-body">
    <AppSection fullscreen>
      <HomeSection id="Home" />
    </AppSection>
    <AppSection flip fullscreen>
      <AboutSection id="about" />
    </AppSection>
    <AppSection fullscreen>
      <PortfolioSection id="portfolio" />
    </AppSection>
    <AppSection flip>
      <ExpSection id="exp" />
    </AppSection>
    <AppSection fullscreen id="contact">
      <ContactSection />
    </AppSection>
  </div>
</template>

<script>
import AppSection from "../components/AppSection.vue";
import HomeSection from "../sections/HomeSection.vue";
import AboutSection from "../sections/AboutSection.vue";
import PortfolioSection from "../sections/PortfolioSection.vue";
import ExpSection from "../sections/ExpSection.vue";
import ContactSection from "../sections/ContactSection.vue";

export default {
  name: "AppHomeView",
  components: {
    AppSection,
    HomeSection,
    AboutSection,
    PortfolioSection,
    ExpSection,
    ContactSection,
  },
};
</script>

<style lang="scss" scoped>
.fake-body {
  height: calc(100vh - 104px);
  margin-top: 104px;
}
</style>
