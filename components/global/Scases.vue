<template>
  <section class="bg-white mx-auto max-w-screen-xl px-10">
    <cheader></cheader>
    <div class="container px-5 mx-auto">
      <h2 class="mt-4">Check out our solutions</h2>
      <h4 class="mb-6">Commitment and creativity mark our creations. By all means, stroll along...</h4>
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
    <scrollsign></scrollsign>
  </section>
</template>
