<template>
  <div>
    <div class="h-full overflow-hidden mx-4 md:mx-0">
      <img class="mx-auto h-9/12 w-9/12 sm:w-full sm:h-full object-cover object-center px-8" :src="img" :alt="alt">
      <div class="md:p-4 text-center">
        <h1 class="title-font text-sm sm:text-lg font-bold text-primary md:mb-3">{{title}}</h1>
        <p class="text-sm sm:text-base leading-5 text-gray-500 mb-3">{{descrip}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img','alt','title','descrip']
}
</script>
