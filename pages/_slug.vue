<template>
  <main class="container prose mx-auto">
    <nuxt-content class="py-28" :document="doc" />
  </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  async asyncData({ $content, params }) {
    const doc = await $content(params.slug || "index").fetch();

    return { doc };
  },
  head() {
    return {
      // @ts-ignore
      title: this.doc.title,
      meta: [
        {
          hid: "description",
          name: "description",
          // @ts-ignore
          content: this.doc.description,
        },
      ],
    };
  },
});
</script>
