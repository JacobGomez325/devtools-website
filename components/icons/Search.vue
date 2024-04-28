<template>
  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" :class="props.color" :height="props.height" :width="props.width"  xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
</template>

<script lang="ts" setup >
const props = defineProps({
  width: {
    type: String,
    default: '1em'
  },
  height: {
    type: String,
    default: '1em'
  },
  color: {
    type: String,
    default: 'currentColor'
  }
})
</script>

