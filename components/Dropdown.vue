<template>
  <div class=" w-56 text-right">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full space-x-3 justify-center items-center rounded-md bg-elementColor px-4 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          <span>Filters</span>
          <IconsChevronDown width="1.1em" height="1.1em"/>
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem 
              v-for="(item,index) in props.items" 
              v-slot="{ active }"
              :key="index">
              <button
              @click="getItem(item)"
                :class="[
                  active ? 'bg-secondary text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
               
                {{ item }}
              </button>
            </MenuItem>
           
          </div>
          
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import type { PropType } from 'vue';
const emits = defineEmits(['onGetItem'])
const props = defineProps({
  items:{
    type:Array as PropType<string[]>
  }
})

function getItem(item:string) {
  emits("onGetItem",item)
}
</script>
