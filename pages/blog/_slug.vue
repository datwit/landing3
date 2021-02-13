<template>
  <div class="mt-28">
    <article class="mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-2xl">
      <img :src="doc.img" :alt="doc.alt" />
      <h1>{{ doc.title }}</h1>
      <h6>
        Post last updated:
        <time :datetime="doc.updatedAt">{{ formatDate(doc.updatedAt) }}</time>
      </h6>

      <nuxt-content :document="doc" />

      <author :author="doc.author" />
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  async asyncData({ $content, params }) {
    const doc = await $content("blog", params.slug).fetch();

    return { doc };
  },
  methods: {
    formatDate(date: Date): string {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
});
</script>
