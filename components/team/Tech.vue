<template>
  <section class="bg-white mx-auto max-w-screen-xl px-10">
    <cheader></cheader>
      <div class="container px-5 mx-auto">
        <h2 class="mt-4">Lorem ipsum dolor sit amet consectetur. </h2>
        <h4 class="mb-6">Blanditiis enim nihil earum qui, a non fugit consectetur nobis natus quasi...</h4>
        <div class="flex flex-wrap -m-4 relative sm:mt-1/3 lg:mt-1/4">
          <div v-for="image in images" :key="image"  class="p-4 w-1/2 sm:w-1/5">
            <img :src="image.src" :alt="image.alt">
          </div>
        </div>
      </div>
      <scrollsign></scrollsign>
  </section>
</template>


<script>
export default {
  data() {
    return {

      images:[
        {
          alt: 'AWS',
          src: '/images/toolset/aws.png'
        },
        {
          alt: 'Chalice',
          src: '/images/toolset/chalice.png'
        },
        {
          alt: 'Keras',
          src: '/images/toolset/keras.png'
        },
        {
          alt: 'Matplotlib',
          src: '/images/toolset/matplotlib.png'
        },
        {
          alt: 'Nuxtjs',
          src: '/images/toolset/nuxtjs.png'
        },
        {
          alt: 'Python',
          src: '/images/toolset/python.png'
        },
        {
          alt: 'Sagemaker',
          src: '/images/toolset/sagemaker.png'
        },
        {
          alt: 'SKlearn',
          src: '/images/toolset/sklearn.png'
        },
        {
          alt: 'Tensorflow',
          src: '/images/toolset/tensorflow.png'
        },
        {
          alt: 'Vega',
          src: '/images/toolset/vega.png'
        },
      ]

    }
  },
}
</script>
