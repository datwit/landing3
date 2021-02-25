<template>
  <nav class=" top-0 inset-x-0 bg-white z-10">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6">
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
          <button class="mr-2" aria-label="Open Menu" @click="drawer">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-9 h-9 text-primary hover:text-secondary2"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          </button>
        </div>

      </div>
    </div>
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity">
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0">
        </div>
      </div>
    </transition>
    <!----------------Sidenav------>
    <aside
      class="transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
      <span
        @click="isOpen = false"
        class="flex w-full items-center p-4 border-b bg-primary">
        <img src="../static/images/logo-white.png" alt="Logo" class="mx-auto" />
      </span>
      <span
        @click="isOpen = false"
        class="flex items-center p-4 text-primary hover:text-secondary2 font-semibold"
        ><span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6">
            <path
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
            </path>
          </svg>
        </span>
        <span><nuxt-link to="/">Home</nuxt-link></span></span>
      <span
        @click="isOpen = false"
        class="flex items-center p-4 text-primary hover:text-secondary2 font-semibold"
        ><span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6">
            <path
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
            </path>
          </svg>
        </span>
        <span><nuxt-link to="/cases-studies">Study Cases</nuxt-link></span></span
      >
      <span
        @click="isOpen = false"
        class="flex items-center p-4 text-primary hover:text-secondary2 font-semibold">
        <span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6">
            <path
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
            </path>
          </svg>
        </span>
        <span><nuxt-link to="/about">About Us</nuxt-link></span></span>
      <span
        @click="isOpen = false"
        class="flex items-center p-4 text-primary hover:text-secondary2 font-semibold">
        <span class="mr-2">
           <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6">
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
            </path>
          </svg>
        </span>
        <span><nuxt-link to="/contact">Contact Us</nuxt-link></span></span>
        <span
        @click="isOpen = false"
        class="flex items-center p-4 text-primary hover:text-secondary2 font-semibold">
        <span class="mr-2">
         <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="w-6 h-6">
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>

        </span>
        <span><nuxt-link to="/blog">Blog</nuxt-link></span></span>
    </aside>
  </nav>
</template>

<style scoped>
/*******main menu**********************/
.nav-link{
  transition: all ease 0.3s;
  position: relative;
  transition: 0.5s;

}
.nav-link::after{
  position: absolute;
  content: "";
  top: 100%;
  left: 0;
  width: 100%;
  height: 5px;
  background: #e69c24;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s;
}
.nav-link:hover::after{
  transform: scaleX(1);
  transform-origin: left;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      isOpen: false
    };
  },
   methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen)
        this.isOpen = false;
    });
  }
});
</script>
