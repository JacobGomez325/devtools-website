<template>
  <div class="flex  text-gray-400 hover:text-gray-500 cursor-pointer space-x-2 px-4 pb-6 items-center last:pb-0 hover:border-gray-400 border-gray-700 border-l transition-all duration-200">
    <span v-html="props.icon"></span>
    <span class="text-sm"> {{ props.title }} </span>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    title: {
      type:String,
      required:true
    },
    icon : {
      type:String,
      required:true
    },
   
  })
</script>

<style scoped>

</style>