<template>
  <section class="bg-white mx-auto max-w-screen-xl">
    <cheader></cheader>
    <div class="container px-5 mx-auto">
      <h2 class="mt-4">Check out our solutions</h2>
      <h4 class="mb-6">Commitment and creativity mark our creations. By all means, stroll along...</h4>
      <div class="hidden md:block">
        <div class="flex flex-wrap -m-4">
          <!------------------------------------------------>
          <div class="p-4 md:w-1/3">
            <Studycase
            img = "https://dummyimage.com/720x400"
            alt = "img"
            title = "The Catalyzer"
            descrip = "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
            />
          </div>
          <!----------------------------------------------------------->
          <div class="p-4 md:w-1/3">
            <Studycase
              img = "https://dummyimage.com/720x400"
              alt = "img"
              title = "The 400 Blows"
              descrip = "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
            />
          </div>
          <!----------------------------------------------------------->
          <div class="p-4 md:w-1/3">
            <Studycase
              img = "https://dummyimage.com/720x400"
              alt = "img"
              title = "Shooting Stars"
              descrip = "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
            />
          </div>
          <!-------------------------------------------------------------->
        </div>
      </div>
      <div class="md:hidden">
        <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
          <Studycase
            img = "https://dummyimage.com/720x400"
            alt = "img"
            title = "The Catalyzer"
            descrip = "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
          />
          <Studycase
            img = "https://dummyimage.com/720x400"
            alt = "img"
            title = "The 400 Blows"
            descrip = "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
          />
          <Studycase
            img = "https://dummyimage.com/720x400"
            alt = "img"
            title = "Shooting Stars"
            descrip = "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
          />
        </VueSlickCarousel>
      </div>

    </div>
    <scrollsign></scrollsign>
  </section>
</template>

<script lang = "js">
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
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
    }
</script>
