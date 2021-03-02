<template>
  <section class="bg-white mx-auto max-w-screen-xl">
    <cheader></cheader>
    <div class="container px-5 mx-auto">
      <h2 class="mt-0">Frequently ask questions</h2>
      <h4 class="mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit...</h4>
      <div class="flex flex-wrap -m-4">
        <!------------------------------------>
        <div class="accordionItem" @click.prevent="active = !active">
          <div class="accordionItemHeading flex justify-between" v-bind:class="{'close': !active, 'open': active}">
            <h3 class="text-left">Question 1</h3>
            <svg class="h-8 w-8 text-secondary2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
            <!-- <span class="text-gray-200" v-show="!active">&#10133;</span>
            <span class="text-gray-200" v-show="active">&#10134;</span> -->
          </div>
          <div class="accordionItemContent" v-show="active" v-bind:class="{'close': !active, 'open': active}"><slot />
            <p class="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus perspiciatis quos dignissimos voluptatibus accusamus soluta mollitia, corporis placeat ducimus iure qui quia tempora ipsum ipsam quas similique illum obcaecati?</p>
          </div>
        </div>
        <!------------------------------------->
      </div>
    </div>
    <scrollsign></scrollsign>
  </section>
</template>


<style>
.accordionItem{
    display:block;
    width:100%;
    box-sizing: border-box;
    padding: 0 !important;
    margin: 0 !important;

}
.accordionItemHeading{
    cursor:pointer;
    /* margin:0px 0px 10px 0px;*/
    padding:10px;
    background:white;
    color: #1e4158;
    width:100%;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    box-sizing: border-box;
    margin: 15px 0 15px 0px !important;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.16), 0px 2px 10px rgba(0,0,0,0.12);

}
 .accordionItemContent.close {
      height:0px;
      transition:height 1s ease-out;
      -webkit-transform: scaleY(0);
    -o-transform: scaleY(0);
    -ms-transform: scaleY(0);
    transform: scaleY(0);
      float:left;
}

  .accordionItemContent.open {
      padding: 20px;
      background-color: #fff;
      border: 1px solid #ddd;
      width: 100%;
     /*margin: 0px 0px 10px 0px;*/
      display:block;
      -webkit-transform: scaleY(1);
    -o-transform: scaleY(1);
    -ms-transform: scaleY(1);
    transform: scaleY(1);
      -webkit-transform-origin: top;
    -o-transform-origin: top;
    -ms-transform-origin: top;
    transform-origin: top;

    -webkit-transition: -webkit-transform 0.4s ease-out;
    -o-transition: -o-transform 0.4s ease;
    -ms-transition: -ms-transform 0.4s ease;
    transition: transform 0.4s ease;
          box-sizing: border-box;
  }


  .accordionItemHeading.open{
      margin:0px;
          -webkit-border-top-left-radius: 3px;
      -webkit-border-top-right-radius: 3px;
      -moz-border-radius-topleft: 3px;
      -moz-border-radius-topright: 3px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      -webkit-border-bottom-right-radius: 0px;
      -webkit-border-bottom-left-radius: 0px;
      -moz-border-radius-bottomright: 0px;
      -moz-border-radius-bottomleft: 0px;
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 0px;
      background-color: #eaebec;
      color: #e69c24;
  }



</style>


<script>
export default {
  data(){
    return {
      active: false
    }
  }
}
</script>
