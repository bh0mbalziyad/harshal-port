<template>
  <div
    class="h-full text-white max-w-5xl px-1 mx-auto flex flex-col justify-center items-center"
  >
    <h2
      class="font-bold text-4xl pb-2 border-b-gray-500 border-b-4 mb-4 self-start"
    >
      Contact
    </h2>

    <p class="self-start font-thin text-xl mb-12">
      Fill the form below to reach out to me
    </p>
    <form
      ref="contactForm"
      @submit.prevent="onFormSubmit"
      class="w-full max-w-[700px] mx-auto flex flex-col gap-4"
    >
      <input
        name="username"
        id="username"
        type="text"
        placeholder="Your name"
        class="px-2 py-2 border text-white border-white rounded-md bg-transparent"
      />
      <input
        class="px-2 py-2 border text-white border-white rounded-md bg-transparent"
        name="email"
        id="email"
        type="email"
        placeholder="Your email"
      />
      <textarea
        class="px-2 py-2 border text-white border-white rounded-md bg-transparent"
        name="message"
        id="message"
        cols="30"
        rows="5"
        placeholder="Your message"
      ></textarea>
      <span class="self-center">
        <AppButton type="submit">
          {{ isSent ? "Sent!" : "Submit" }}
        </AppButton>
      </span>
    </form>
    <ul class="p-0 mt-12 text-white flex gap-4 xl:hidden">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/yasar-khan-525712184"
      >
        <li
          role="side-sticky"
          class="border border-grayy-600 flex rounded-full justify-center items-center flex-col p-3 md:p-6"
        >
          <img
            class="w-[25px] h-[25px] md:w-[40px] md:h-[40px]"
            src="../assets/sidesticky/linkedin.svg"
            alt="Linkedin"
          />
        </li>
      </a>
      <a target="_blank" href="https://www.instagram.com/hartstills">
        <li
          role="side-sticky"
          class="border border-grayy-600 flex rounded-full justify-center items-center flex-col p-3 md:p-6"
        >
          <img
            class="w-[25px] h-[25px] md:w-[40px] md:h-[40px]"
            src="../assets/sidesticky/instagram.svg"
            alt="Instagram"
          />
        </li>
      </a>
      <a target="_blank" href="mailto:hartstills@gmail.com">
        <li
          role="side-sticky"
          class="border border-grayy-600 flex rounded-full justify-center items-center flex-col p-3 md:p-6"
        >
          <img
            class="w-[25px] h-[25px] md:w-[40px] md:h-[40px]"
            src="../assets/sidesticky/mail.svg"
            alt="mail"
          />
        </li>
      </a>
      <a target="_blank" href="#">
        <li
          role="side-sticky"
          class="border border-grayy-600 flex rounded-full justify-center items-center flex-col p-3 md:p-6"
        >
          <img
            class="w-[25px] h-[25px] md:w-[40px] md:h-[40px]"
            src="../assets/sidesticky/resume.svg"
            alt="Resume"
          />
        </li>
      </a>
    </ul>
  </div>
</template>
<script>
import AppButton from "../components/AppButton.vue";

export default {
  name: "ContactSection",
  data() {
    return {
      isSent: false,
    };
  },
  components: { AppButton },
  methods: {
    onFormSubmit() {
      this.$refs.contactForm.reset();
      this.isSent = true;
      setTimeout(() => {
        this.isSent = false;
      }, 1500);
    },
  },
};
</script>
