<template>
  <section class="bg-white mx-auto max-w-screen-xl">
    <cheader></cheader>
    <div class="container px-5 mx-auto">
      <h2 class="mt-4">Check out our solutions</h2>
      <h4 class="mb-6">Commitment and creativity mark our creations. By all means, stroll along...</h4>
      <div class="hidden md:block">
        <div class="flex flex-wrap -m-4">
          <!------------------------------------------------>
          <div v-for="c in cases" :key="c.slug" class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden mx-4 md:mx-0">
              <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="">
              <div class="p-4">
                <!--  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> -->
                <nuxt-link to="post.path">
                  <h1 class="title-font text-lg font-bold text-primary mb-3">{{c.title}}</h1>
                </nuxt-link>
                <p class="mt-2 text-base leading-6 text-gray-500">{{c.description}}</p>
                <!-- <div class="flex items-center flex-wrap ">
                  <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div> -->
              </div>
            </div>
          </div>
          <!-------------------------------------------------------------->
        </div>
      </div>
      <div class="md:hidden">
        <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
          <div v-for="c in cases" :key="c.slug" class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden mx-4 md:mx-0">
              <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="">
              <div class="p-4">
                <!--  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> -->
                <nuxt-link to="post.path">
                  <h1 class="title-font text-lg font-bold text-primary mb-3">{{c.title}}</h1>
                </nuxt-link>
                <p class="mt-2 text-base leading-6 text-gray-500">{{c.description}}</p>
                <!-- <div class="flex items-center flex-wrap ">
                  <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div> -->
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
    <scrollsign></scrollsign>
  </section>
</template>

<script lang="js">
import Vue from "vue";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default Vue.extend({
  components: { VueSlickCarousel },
  async asyncData({ $content }) {
    const cases = await $content("study-cases")
      .sortBy("createdAt", "desc")
      .limit(3)
      .fetch();
    return { cases };
  },
  data() {
      return {

    settings: {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
          },
        }
  },
});
</script>
