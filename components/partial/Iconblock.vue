<template>
  <div>
    <div class="h-full overflow-hidden mx-4 md:mx-0">
      <img class="lg:h-48 md:h-36 w-full object-cover object-center p-8" :src="img" :alt="alt">
      <div class="p-4 text-center">
        <h1 class="title-font text-lg font-bold text-primary mb-3">{{title}}</h1>
        <p class="mt-2 text-base leading-6 text-gray-500">{{descrip}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img','alt','title','descrip']
}
</script>
