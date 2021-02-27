<template>
<div>
  <div class="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden mx-4 md:mx-0">
    <img class="lg:h-48 md:h-36 w-full object-cover object-center" :src="img" :alt="alt">
    <div class="p-4">
      <!--  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> -->
      <h1 class="title-font text-lg font-bold text-primary mb-3">{{title}}</h1>
      <p class="mt-2 text-base leading-6 text-gray-500">{{descrip}}</p>
      <div class="flex items-center flex-wrap ">
        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  props: ['img','alt','title','descrip']
}
</script>
