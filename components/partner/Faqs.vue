<template>
  <section class="bg-white mx-auto max-w-screen-xl">
    <cheader></cheader>
    <div class="container px-5 mx-auto">
      <h2 class="mt-0">Frequently ask questions</h2>
      <h4 class="mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit...</h4>

        <!------------------------------------>
        <div class="collapsible-wrap" id="app">
          <Collapsible
          title="Question 1"
          cont = "Lorem ipsum"
          />
          <Collapsible
          title="Question 2"
          cont = "Lorem ipsum"
          />
          <Collapsible
          title="Question 3"
          cont = "Lorem ipsum"
          />
        </div>
        <!------------------------------------->

    </div>
    <scrollsign></scrollsign>
  </section>
</template>


<style>
.collapsible-wrap{
  box-shadow: 0px 2px 5px rgba(0,0,0,0.16), 0px 2px 10px rgba(0,0,0,0.12);
}
.accordionItem{
    display:block;
    width:100%;
    box-sizing: border-box;
    padding: 0 !important;
    margin: 0 !important;

}
</style>


