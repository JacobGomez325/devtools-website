<template>
  <div class="bg-secondary  ">
    <TheNavbar />
    <TheHeader />
   <pre class="text-white">
   
   </pre>
    <main class="container mx-auto  px-6 my-grid">
      <div class="px-2 py-5  ">
        <h4 class="text-white  font-semibold py-4">Categories </h4>
        <CategoriesItem  
          v-for="(item,index) in categoriesItems" 
          :key="index" 
          :title="item.title" 
          :icon="item.icon"
          @on-get-title="getTitle"/>
      </div>
      <div class="">
       <div class="flex justify-between">
        <SearchBar v-model="search" />
        <Dropdown :items="['Linux','Mac Os']" @on-get-item="getItem" />
       </div>
       <div class="content grid grid-cols-3 gap-8 py-8 ">
        <CardsElement 
          v-for="(item,index) in DevtoolsItems" 
          :key="index"
          :name="item.name" 
          :link="item.link"
          :image ="item.image"
          :description="item.description" /> 
          
       </div>
      </div>
    </main>
    <TheFooter />
  
    
  </div>
</template>
<script setup lang="ts">
import type {CategoriesItem} from "@/types/categorie"
import { linuxItems,linuxItemsDetails } from "./data/linux"
import { macItems,macItemsDetails } from "./data/macOs"
import type { DataItem } from "./types/data";

const categoriesItems = ref<CategoriesItem[]>([
  {
    title:"all",
    icon:'<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5m0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5m-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"></path><path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM2 1a1 1 0 0 0-1 1v1h14V2a1 1 0 0 0-1-1zM1 4v10a1 1 0 0 0 1 1h2V4zm4 0v11h9a1 1 0 0 0 1-1V4z"></path></svg>'
  },
 
  {
    title:'medias',
    icon:'<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z"></path></svg>'
  },
  {
    title:'browsers',
    icon:'<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.75C0 2.784.784 2 1.75 2h20.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 22.25 22H1.75A1.75 1.75 0 0 1 0 20.25ZM22.5 7h-21v13.25c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25Zm-10-3.5v2h10V3.75a.25.25 0 0 0-.25-.25ZM7 3.5v2h4v-2Zm-5.25 0a.25.25 0 0 0-.25.25V5.5h4v-2Z"></path></svg>'
  },
  {
    title:'devops',
    icon:'<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z" stroke="none"/></svg>'
  },
  {
    title:'programmings',
    icon:'<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"></path></svg>'
  },
  {
    title: 'userfullLink',
    icon:'<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>'
  },
  {
    title:'databases',
    icon:'<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"></path></svg>'
  },

])


const search = ref('')
const DevtoolsItems = ref<DataItem[]>(linuxItems)
const DevtoolsItemsDetails = ref(linuxItemsDetails)




function filterItemsByCategory(category:string) {
  const foundItem = DevtoolsItemsDetails.value.find(item => item.hasOwnProperty(category));
  return foundItem ? foundItem[category] : [];
}
function getTitle(title:string) {
  if(title === "all") {
    DevtoolsItems.value = linuxItems
  }else {
    DevtoolsItems.value = filterItemsByCategory(title)
  }
  
}

function getItem(os:string) {
  if(os === 'Linux') {
    DevtoolsItems.value = linuxItems
    DevtoolsItemsDetails.value = linuxItemsDetails
  }else {
    DevtoolsItems.value = macItems
    DevtoolsItemsDetails.value = macItemsDetails
  } 
}



</script>
<style scoped>

.my-grid {
  display:grid;
  grid-template-columns: 3fr 9fr;
}


</style>
