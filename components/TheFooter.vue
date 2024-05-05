<template>
  <footer class="py-3 border-t border-[#162033]">
    <div
      class="md:container px-4 md:mx-auto items-center flex justify-between pr-20"
    >
      <div class="md:text-sm text-xs text-white font-semibold">
        Copyright
        &#9426; <span>{{ year }}</span> Devtoolbox - MIT License
      </div>
      <div class="">
        <a
          href="https://github.com/fredagbona/devtoolbox"
          class="text-white"
        >
        <!-- Utilisation de l'icône Github -->
          <IconsGithub width="1.3em" height="1.3em" />
        </a>
      </div>
    </div>
  </footer>
</template>


<script setup lang="ts">
import { ref } from "vue";

const year = ref(new Date().getFullYear());
</script>


<style lang="scss" scoped></style>




