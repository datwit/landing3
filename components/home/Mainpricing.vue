<template>
    <section class="bg-white mx-auto max-w-screen-xl">
        <cheader></cheader>
        <div class="container px-5 mx-auto">
            <h2 class="mt-4">Choose your product</h2>
            <h4 class="mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit...</h4>

          <div class="hidden md:block">
            <div class="-m-4 flex flex-wrap">
                <!-------------------------------------------------------------------------->
                <div class="p-4 md:w-1/3 w-full">
                    <div class="md:h-full p-3 border-2 border-gray-200 border-opacity-60 overflow-hidden">
                        <h2 class="text-sm tracking-widest title-font mb-1 font-medium pt-2 h-12">{{prices[0].field}}</h2>
                        <h1 class="text-5xl text-primary mb-1 leading-none mx-auto">{{prices[0].price}}</h1>
                        <p class="text-xs text-gray-500 mt-3 border-b border-gray-200">{{prices[0].descrip}}</p>
                        <p v-for="b in prices[0].bullets" :key="b" class="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                            <span class="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                            <svg class="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="4"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                            </span>{{b.title}}
                        </p>
                    </div>
                </div>
                <!------------------------------------------------------------------------------------->
                <div class="p-4 md:w-1/3 w-full">
                    <div class="md:h-full p-3 border-2 border-secondary2 border-opacity-60 overflow-hidden relative">
                        <span class="bg-secondary2 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                        <h2 class="text-sm tracking-widest title-font mb-1 font-medium pt-2 h-12">{{prices[1].field}}</h2>
                        <h1 class="text-5xl text-primary leading-none mb-1 mx-auto">{{prices[1].price}}</h1>
                        <p class="text-xs text-gray-500 mt-3 border-b border-gray-200">{{prices[1].descrip}}</p>
                        <p v-for="b in prices[1].bullets" :key="b" class="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                            <span class="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                            <svg class="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="4"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                            </span>{{b.title}}
                        </p>
                    </div>
                </div>
                <!----------------------------------------------------------------------------------->
                <div class="p-4 md:w-1/3 w-full">
                    <div class="md:h-full p-3 border-2 border-gray-200 border-opacity-60 overflow-hidden">
                        <h2 class="text-sm tracking-widest title-font mb-1 font-medium pt-2 h-12">{{prices[2].field}}</h2>
                        <h1 class="text-5xl text-primary mb-1 leading-none mx-auto">{{prices[2].price}}</h1>
                        <p class="text-xs text-gray-500 mt-3 border-b border-gray-200">{{prices[2].descrip}}</p>
                        <p v-for="b in prices[2].bullets" :key="b" class="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                            <span class="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                            <svg class="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="4"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                            </span>{{b.title}}
                        </p>
                    </div>
                </div>
                <!----------------------------------------------------------------------------------->
                <div class="mx-auto flex justify-center items-center flex-col">
                  <h3 class="mb-5">Let's work together</h3>
                  <a class="btn" href="/contact">Contact us</a>
                </div>
              </div>
          </div>

          <div class="md:hidden">
            <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
              <div>
                <div class="h-full p-3 border-2 border-gray-200 border-opacity-60 overflow-hidden mx-4 md:mx-0">
                  <h2 class="text-sm tracking-widest title-font mb-1 font-medium pt-2 h-12">{{prices[0].field}}</h2>
                    <h1 class="text-5xl text-primary mb-1 leading-none mx-auto">{{prices[0].price}}</h1>
                    <p class="text-xs text-gray-500 mt-3 border-b border-gray-200">{{prices[0].descrip}}</p>
                    <p v-for="b in prices[0].bullets" :key="b" class="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                        <span class="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                        <svg class="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="4"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                        </span>{{b.title}}
                    </p>
                </div>
              </div>
              <!-------------------------------------------------------------------->
              <div>
                <div class="h-full p-3 border-2 border-secondary2 border-opacity-60 overflow-hidden relative mx-4 md:mx-0">
                  <span class="bg-secondary2 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                  <h2 class="text-sm tracking-widest title-font mb-1 font-medium pt-2 h-12">{{prices[1].field}}</h2>
                  <h1 class="text-5xl text-primary leading-none mb-1 mx-auto">{{prices[1].price}}</h1>
                  <p class="text-xs text-gray-500 mt-3 border-b border-gray-200">{{prices[1].descrip}}</p>
                  <p v-for="b in prices[1].bullets" :key="b" class="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                      <span class="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                      <svg class="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="4"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                      </span>{{b.title}}
                  </p>
                </div>
              </div>
              <!------------------------------------------------------------------------->
              <div>
                <div class="h-full p-3 border-2 border-gray-200 border-opacity-60 overflow-hidden mx-4 md:mx-0">
                  <h2 class="text-sm tracking-widest title-font mb-1 font-medium pt-2 h-12">{{prices[2].field}}</h2>
                    <h1 class="text-5xl text-primary mb-1 leading-none mx-auto">{{prices[2].price}}</h1>
                    <p class="text-xs text-gray-500 mt-3 border-b border-gray-200">{{prices[2].descrip}}</p>
                    <p v-for="b in prices[2].bullets" :key="b" class="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                        <span class="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                        <svg class="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="4"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                        </span>{{b.title}}
                    </p>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
        <scrollsign></scrollsign>
      </section>
</template>

<style>

/*overriding slick theme*/
.slick-dots li.slick-active button::before {
    opacity: 1;
    color: #1e4158;
}
.slick-dots li button {
  width: 25px;
  height: 5px;
  background: transparent;
}
.slick-dots li button::before {
  width: 25px;
  height: 5px;
  content: '';
  background: #00baff;
}

.slick-prev, .slick-next {
  width: 25px;
  height: 25px;
  position: absolute;

}
.slick-prev{
  transform: rotate(135deg);
}
.slick-next{
  transform: rotate(45deg);
}

.slick-next::before {
    width: 25px;
    height: 25px;
    border-top: 5px solid #00baff;
    border-right: 5px solid #00baff;
    /* position: absolute; */
    transform: rotate(45deg);
}
.slick-prev::before {
    width: 25px;
    height: 25px;
    border-bottom: 5px solid #00baff;
    border-right: 5px solid #00baff;
    transform: rotate(135deg);
}

</style>

<script lang = "js">
import priceData from "~/content/data/pricing.json";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
     data() {
      return {

        prices:priceData,

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
    }


</script>
