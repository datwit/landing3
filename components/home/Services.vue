<template>
  <section class="bg-white mx-auto max-w-screen-xl px-10">
    <cheader></cheader>
    <div class="flex items-center">
    <div class="container px-5 mx-auto">
      <h4 class="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
      <div class="flex flex-wrap -m-4">
        <!----------------------------------------------------------------->
        <div class="sm:w-1/3 h-full w-full">
          <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row sm:flex-col">
            <li class="-mb-px mr-2 flex-auto text-center flex items-center sm:pb-12 flex-col">
              <svg class="h-8 w-8"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                v-bind:class="{'text-primary bg-white': openTab !== 1, 'text-secondary2 bg-white sub': openTab === 1}">
                <polyline points="16 18 22 12 16 6" />  <polyline points="8 6 2 12 8 18" />
              </svg>
              <a class="text-base font-bold  block leading-normal relative" v-on:click="toggleTabs(1)" v-bind:class="{'text-primary bg-white': openTab !== 1, 'text-secondary2 bg-white sub': openTab === 1}">
                Software
                <br />
                Development
              </a>
            </li>
            <li class="-mb-px mr-2 flex-auto text-center flex items-center flex-col">
              <svg class="h-8 w-8"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                v-bind:class="{'text-secondary2 bg-white': openTab !== 1, 'text-primary bg-white sub': openTab === 1}">  <path stroke="none" d="M0 0h24v24H0z"/>
                <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>  <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
               </svg>
              <a class="text-base font-bold leading-normal relative" v-on:click="toggleTabs(2)" v-bind:class="{'text-primary bg-white': openTab !== 2, 'text-secondary2  bg-white sub': openTab === 2}">
                Data
                <br />
                Science
              </a>
            </li>
          </ul>
        </div>
        <div class="sm:w-2/3 h-full relative flex flex-col min-w-0 break-words bg-white w-full h-full mb-6 shadow-lg">
          <div class="px-4 flex-auto border-2 border-gray-200 border-opacity-60">
            <div class="tab-content tab-space">
              <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                <p class="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate labore tempore necessitatibus, nobis obcaecati quibusdam cupiditate reiciendis quasi suscipit et, pariatur culpa facere illum soluta molestiae ad libero quia!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate labore tempore necessitatibus, nobis obcaecati quibusdam cupiditate reiciendis quasi suscipit et, pariatur culpa facere illum soluta molestiae ad libero quia!
                </p>
              </div>
              <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                <p class="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quos vel iure illo quidem quod fuga natus deleniti fugiat ex minus, dolorum delectus. Porro officia error expedita non modi deserunt!
                </p>
              </div>
            </div>
          </div>
        </div>
        <!------------------------------------------------------------------------------------->
      </div>
    </div>
    </div>
    <scrollsign></scrollsign>
  </section>
</template>

<style lang="css">

a{
  cursor: pointer;
}
a.sub::after{
  position: absolute;
  content: "";
  top: 100%;
  left: 0;
  width: 100%;
  height: 5px;
  background: #e69c24;
}

</style>

<script>

export default {

  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}

</script>





