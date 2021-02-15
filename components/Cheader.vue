<template>
  <nav class=" top-0 inset-x-0 bg-white z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <nuxt-link
              active-class="active"
              class=" font-semibold text-xl text-secondary2 tracking-tight border-transparent"
              to="/"
            >
              <img src="/images/logo.png" alt="logo" width="140" height="60" />
            </nuxt-link>
          </div>
          <div class="hidden md:block relative md:left-1/4 lg:left-2/4 xl:left-full">
            <div class="flex items-baseline"><!-- md:ml-20 lg:ml-72 xl:ml-100 -->
              <nuxt-link                
                to="/"
                class=" nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:outline-none focus:text-secondary1"
              >
                Home
              </nuxt-link>
              <nuxt-link
                to="/cases-studies"
                class="nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:outline-none focus:text-secondary1"
              >
                Study Cases
              </nuxt-link>              
              <nuxt-link
                to="/about"
                class="nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:outline-none focus:text-secondary1"
              >
                About us
              </nuxt-link>
              <nuxt-link
                to="/contact"
                class="nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:outline-none focus:text-secondary1"
              >
                Contact us
              </nuxt-link>
              <nuxt-link
                to="/blog"
                class="nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:outline-none focus:text-secondary1"
              >
                Blog
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:text-white"
            aria-label="mobile menu"
            @click="mobileMenu = !mobileMenu"
          >
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg
              class="block h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg
              class="hidden h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
    <div :class="[!mobileMenu ? 'hidden' : 'block', 'md:hidden']">
      <div class="px-2 pt-2 pb-3 sm:px-3">
        <nuxt-link
          to="/services"
          class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700"
        >
          Services
        </nuxt-link>
        <nuxt-link
          to="/cases-studies"
          class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700"
        >
          Cases Studies
        </nuxt-link>
        <nuxt-link
          to="/blog"
          class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-teal-700 focus:outline-none focus:text-white focus:bg-teal-700"
        >
          Blog
        </nuxt-link>
        <nuxt-link
          to="/about"
          class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-teal-700 focus:outline-none focus:text-white focus:bg-teal-700"
        >
          About us
        </nuxt-link>
        <nuxt-link
          to="/contact"
          class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-teal-700 focus:outline-none focus:text-white focus:bg-teal-700"
        >
          Contact us
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      mobileMenu: false,
      profileMenu: false,
    };
  },
});
</script>
