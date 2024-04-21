<template>
  <div class="bg-elementColor  h-[150px] p-4 rounded-lg cursor-pointer border border-elementColor hover:border-primary hover:opacity-90 hover:scale-105  transition-all duration-300  ">
    <p class=" capitalize text-white flex space-x-2 font-semibold text-2xl py-2 ">
      <span>{{ props.title }}</span> 
      <slot></slot>
    </p>
    <p class=" text-gray-200 "> {{ props.description }} </p>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string
    description: string
  }>()
</script>

<style scoped>

</style>