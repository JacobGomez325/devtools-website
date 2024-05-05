<template>
  <div class="bg-elementColor  h-[250px] flex flex-col justify-between rounded-lg cursor-pointer border border-elementColor hover:bg-secondary hover:border-primary hover:opacity-90 hover:scale-105  transition-all duration-300">
    <div  class="px-4 pt-4 ">
      <img :src="props.image" class="object-cover h-[48px] w-[48px] " :alt="props.title">
    </div>
    <div class="pb-4 px-4">
      <p class=" capitalize text-white flex space-x-2 font-semibold text-2xl py-2 ">
        <span>{{ props.title }}</span> 
      </p>
      <p class=" text-gray-200 "> {{ props.description }} </p>
    </div>
    <div class="bg-[#162033] rounded-b-lg">
      <div class="p-3 flex justify-between items-center text-white">
        <div class="flex items-center space-x-4">
          <span title="Montily NPM Downloads " class="flex space-x-2 items-center">
            <IconsDownload height="1.2em" width="1.2em" />
            <span class="font-semibold text-sm">25 K</span>
          </span>
          <span title="Github Star" class="flex space-x-2 items-center">
          <IconsStar height="1.3em" width="1.3em" />
            <span class="font-semibold text-sm">25 K</span>
          </span>
        </div>
        <div>
          <span title="Contributors" class="flex space-x-2 items-center">
            <IconsUser height="1.2em" width="1.2em" />
            <span class="font-semibold text-sm">5</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps<{
    title: string
    description: string
    image:string
  }>()
</script>

<style scoped>

</style>