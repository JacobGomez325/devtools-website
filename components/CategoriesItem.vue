<template>
  <div class="flex text-white space-x-2  items-center py-2">
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