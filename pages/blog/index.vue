<template>
  <main class="mt-28">
    <section
      class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
    >
      <cheader></cheader>
      <div class="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1
          class="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
        >
          Latest
        </h1>
        <p class="text-lg leading-7 text-gray-500">
          All the latest DatWit news, straight from the team.
        </p>
      </div>

      <ul class="divide-y divide-gray-200">
        <li v-for="post in posts" :key="post.slug" class="py-12">
          <article
            class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline"
          >
            <dl>
              <dt class="sr-only">Published on</dt>
              <dd class="text-base leading-6 font-medium text-gray-500">
                <time :datetime="post.createdAt">
                  {{ formatDate(post.createdAt) }}
                </time>
              </dd>
            </dl>
            <div class="space-y-5 xl:col-span-3">
              <div class="space-y-6">
                <h2 class="text-2xl leading-8 font-bold tracking-tight">
                  <a class="text-gray-900" href="#">
                    {{ post.title }}
                  </a>
                </h2>
                <div class="prose max-w-none text-gray-500">
                  {{ post.description }}
                </div>
              </div>
              <div class="text-base leading-6 font-medium">
                <nuxt-link
                  class="inline-flex items-center text-blue-500 hover:text-blue-600"
                  aria-label=""
                  :to="post.path"
                >
                  Read more
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </nuxt-link>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

export default Vue.extend({
  async asyncData({ $content }) {
    const posts = await $content("blog")
      .sortBy("createdAt", "desc")
      .limit(5)
      .fetch();
    return { posts };
  },
  methods: {
    formatDate(date: string): string {
      return format(parseISO(date), "dd MMM yyyy");
    },
  },
});
</script>
