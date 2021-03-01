<template>
  <section class="bg-white mx-auto max-w-screen-xl px-10">
    <cheader></cheader>
    <div class="flex items-center">
      <div class="container px-5 mx-auto">
        <h4 class="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
        <!-- <div class="flex mx-auto border-2 border-primary rounded overflow-hidden mt-6 mb-6 max-w-md justify-between">
          <button class="py-1 px-4 focus:outline-none" v-on:click="toggleCards(1)" v-bind:class="{'text-primary bg-white': showCards !== 1, 'text-white bg-secondary2': showCards === 1}">Lorem 1</button>
          <button class="py-1 px-4 focus:outline-none" v-on:click="toggleCards(2)" v-bind:class="{'text-primary bg-white': showCards !== 2, 'text-white bg-secondary2': showCards === 2}">Lorem 2</button>
          <button class="py-1 px-4 focus:outline-none" v-on:click="toggleCards(3)" v-bind:class="{'text-primary bg-white': showCards !== 3, 'text-white bg-secondary2': showCards === 3}">Lorem 3</button>
        </div> -->
        <div class="-m-4 flex flex-wrap">
          <div class="p-4 md:w-1/3 w-full">
              <div class="bg-gray-100 bg-opacity-75 px-8 py-10 rounded-lg overflow-hidden text-center relative">
              <h1 class="title-font sm:text-2xl text-xl font-medium text-primary mb-3">Raclette Blueberry Nextious Level</h1>
              <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              <h2 class="text-black" >$69...</h2>
              <div class="justify-center my-8 select-none flex">
                <a class="btn" href="/contact">Contact us</a>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-2/3 w-full flex items-center">
            <ul>
              <li v-for= "bullet in bullets" :key="bullet"  >
                <p class="flex items-center text-gray-600 mb-6">
                  <span class="w-8 h-8 mr-2 inline-flex items-center justify-center flex-shrink-0">
                  <svg class="h-8 w-8 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="20 6 9 17 4 12" /></svg>
                  </span>{{bullet}}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      showCard: 1,
      bullets:[
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.1',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.2',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.3',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.4',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.5',

      ],
      methods: {
        toggleCards: function(cardNumber){
        this.showCard = cardNumber
        }
      }
    }
  }
}
</script>

