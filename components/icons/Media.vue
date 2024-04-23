<template>
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" :class="props.color" :height="props.height" :width="props.width" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z"></path></svg>
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
