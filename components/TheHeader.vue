<template>
  <div class="container mx-auto px-6 grid grid-cols-2 mt-[80px]  gap-8 pb-4 text-white">
    <div>
      <h1 class="text-6xl font-bold">DevToolBox</h1>
      <p class="leading-8 pb-3 pt-8 text-lg  font-semibold">
        DevToolBox is an open-source repository offering installation, update, removal, and configuration scripts for various developer, DevOps, and system administration tools and packages.
      </p>
      <button class="text-elementColor mt-5 rounded-lg flex items-center space-x-3 bg-white px-3 py-2">
        <IconsBook width="1.3em" height="1.3em" />
        <span>Module Author Guide</span>
      </button>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <cardsOs 
        title="Linux" 
        description="lorem ipsum dolor set"> 
        <IconsLinux width="1.3em" height="1.3em" />
      </cardsOs>
      <cardsOs 
        title="Mac os" 
        description="lorem ipsum dolor set"> 
        <IconsApple width="1.3em" color="text-gray-200" height="1.3em" />
      </cardsOs>
    </div>
  </div>
</template>

<script setup lang="ts">
const listOs = ref([
  {title:"Linux", description:"Lorem ipsum dolor set"},
  {title:"Mac Os", description:"Lorem ipsum dolor set"},
])

</script>

<style scoped>

</style>