<template>
  <nuxt-link :class="props.size"  class="flex items-center  font-bold space-x-2  py-4 px-3 relative text-white hover:text-primary  transition ease-in-out duration-500  cursor-pointer"  :to="link">
    <span :title="`${props.title}`" class=" ">
      <slot></slot>
    </span>
    <span >{{title}}</span>
  </nuxt-link>
</template>

<script setup lang="ts">
  const props = defineProps({
    title: {
      title: String ,
      required: true
    },
    link: {
      type: String,
      default: '#'
    },
    size: {
      type:String,
      default:"text-sm"
    }
  })
  
</script>

<style  scoped>
.router-link-exact-active
{
  color: #fff;
  font-weight: bold;
  padding: 24px 12px;
  background-color: #105887;
}
</style>