<template>
  <Teleport to="#teleport-target">
    <div class="fixed top-[35%] hidden xl:block">
      <ul class="p-0 text-white">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/yasar-khan-525712184"
        >
          <li
            role="side-sticky"
            class="flex transition-transform duration-150 ease-in hover:cursor-pointer hover:translate-x-0 hover:rounded-r-md bg-gray-600 rounded-tr-md justify-between min-w-[160px] py-3 px-4 pr-4 -translate-x-24"
          >
            Linkedin
            <img src="../assets/sidesticky/linkedin.svg" alt="Linkedin" />
          </li>
        </a>
        <a target="_blank" href="https://www.instagram.com/hartstills">
          <li
            role="side-sticky"
            class="flex transition-transform duration-150 ease-in hover:cursor-pointer hover:translate-x-0 hover:rounded-r-md bg-gray-600 justify-between min-w-[160px] py-3 px-4 pr-4 -translate-x-24"
          >
            Instagram
            <img src="../assets/sidesticky/instagram.svg" alt="Instagram" />
          </li>
        </a>
        <a target="_blank" href="mailto:hartstills@gmail.com">
          <li
            role="side-sticky"
            class="flex transition-transform duration-150 ease-in hover:cursor-pointer hover:translate-x-0 hover:rounded-r-md bg-gray-600 justify-between min-w-[160px] py-3 px-4 pr-4 -translate-x-24"
          >
            Mail <img src="../assets/sidesticky/mail.svg" alt="mail" />
          </li>
        </a>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1jcAsejYOdA5XhEA8npsI-e9qsI-P3ckz/view?usp=share_link"
        >
          <li
            role="side-sticky"
            class="flex transition-transform duration-150 ease-linear hover:cursor-pointer hover:translate-x-0 hover:rounded-r-md bg-gray-600 rounded-br-md justify-between min-w-[160px] py-3 px-4 pr-4 -translate-x-24"
          >
            Resume <img src="../assets/sidesticky/resume.svg" alt="Resume" />
          </li>
        </a>
      </ul>
    </div>
  </Teleport>
</template>
