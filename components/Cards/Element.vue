<template>
  <div class="bg-elementColor  h-[250px] flex flex-col justify-between rounded-lg cursor-pointer border border-elementColor hover:bg-secondary hover:border-primary hover:opacity-90 hover:scale-105  transition-all duration-300">
    <div  class="px-4 pt-4 ">
      <img :src="props.image" class="object-cover h-[48px] min-w-[48px] " :alt="props.name">
    </div>
    <div class="pb-4 px-4">
      <p class=" capitalize text-white flex space-x-2 font-semibold text-2xl py-2 ">
        <span>{{ props.name }}</span> 
      </p>
      <p class=" text-gray-200 "> {{ props.description }} </p>
    </div>
    <div class="bg-[#162033] rounded-b-lg h-2 shadow-lg"></div>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps<{
    name: string
    description: string
    image:string
  }>()
</script>

<style scoped>

</style>