<template>
  <section class="bg-white mx-auto max-w-screen-xl">
    <cheader></cheader>
    <div class="container px-5 mx-auto">
        <h2 class="mt-4">Collaborators</h2>
        <h4 class="mb-6">Our amazing collaborators help drive Datwit towards being a cutting-edge company</h4>
      <div class="hidden md:block">
        <div class="flex flex-wrap -m-4">
          <div v-for="col in cols" :key="col" class="p-4 lg:w-1/4 w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <img alt="team" class="flex-shrink-0 rounded-lg w-40 h-40 object-cover object-center mb-4" src="https://dummyimage.com/200x200">
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-gray-900">{{col.name}}</h2>
                <h3 class="text-gray-500 mb-3">{{col.designation}}</h3>
                <span class="inline-flex">
                  <a v-bind:href="col.twitter">
                    <svg class="h-6 w-6 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                  </a>
                  <a v-bind:href="col.linkedin" class="ml-2 text-gray-500">
                    <svg class="h-6 w-6 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                  </a>
                  <a v-bind:href="col.github" class="ml-2 text-gray-500">
                    <svg class="h-6 w-6 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md:hidden">
        <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
            <div v-for="col in cols" :key="col" class="p-4 sm:w-1/3 w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img alt="team" class="flex-shrink-0 rounded-lg w-40 h-40 object-cover object-center mb-4" src="https://dummyimage.com/200x200">
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
                  <h3 class="text-gray-500 mb-3">UI Developer</h3>
                  <span class="inline-flex">
                    <a>
                      <svg class="h-6 w-6 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg class="h-6 w-6 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg class="h-6 w-6 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
        </VueSlickCarousel>
      </div>

    </div>
    <scrollsign></scrollsign>
  </section>
</template>


<script>
import colData from "~/content/data/collaborators.json";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
     data() {
      return {

        cols:colData,

        settings: {
          infinite: false,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          responsive: [

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 669,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
          },
        }
      },
    }

</script>
