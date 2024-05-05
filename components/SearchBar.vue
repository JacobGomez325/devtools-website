<template>
  <div class="relative w-56">
    <input
      name="q"
      value=""
      type="text"
      placeholder="Search..."
      class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-primary outline-none border-0 text-white rounded-md placeholder-gray-400 text-sm px-3 py-2 shadow-sm  bg-elementColor   ps-10 pe-10"
      autocomplete="off"
    />
    <span
      class="absolute inset-y-0 start-0 flex items-center pointer-events-none px-3"
    >
      <span class="flex-shrink-0 text-gray-400  ">
        <IconsSearch width="1.2em" height="1.2em" />
      </span
      >
    </span>
    <span class="absolute inset-y-0 end-0 flex items-center px-3">
      <kbd
        class="inline-flex items-center justify-center text-gray-50  h-5 min-w-[20px] text-[11px] px-1 rounded font-medium font-sans bg-elementorColor  ring-1 ring-gray-300  ring-inset"
      >
        /
      </kbd>
    </span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
