<template>
  <footer>
    <section class="bg-primary mx-auto px-10 relative">
      <div class="sm:pt-1/35 lg:pt-1/3 xl:pt-64 2xl:pt-56  mb-6">
        <img class="mx-auto mb-6" src="/images/logo-grande.png" alt="logo" width="350px">
        <h1 class="text-white text-center text-4xl">Let's work together</h1>
      </div>
      <div class="flex flex-wrap overflow-hidden lg:-mx-2">
        <!-- Column Content -->
        <div class="sm:w-2/4 lg:w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <h2 class="text-white font-bold flex justify-start text-lg mb-5">FOLLOW US</h2>
          <ul class="inline-flex">
            <li class="mr-2">
              <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
            </li>
            <li class="mr-2">
              <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </li>
            <li class="mr-2">
              <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            </li>
            <li class="mr-2">
              <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
            </li>
          </ul>
        </div>
        <!-- Column Content -->
        <div class="sm:w-2/4 lg:w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <h2 class="text-white font-bold flex justify-start text-lg mb-5">CONTACT US</h2>
          <span class="inline-flex items-center">
            <svg class="h-7 w-7 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
            <a href="mailto:contact@datwit.com">
              <h3 class="text-white" >contact@datwit.com</h3>
            </a>
          </span>
          <span class="inline-flex items-center">
            <svg class="h-7 w-7 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
            <h3 class="text-white" >+58 658 987</h3>
          </span>
        </div>
        <!-- Column Content -->
        <div class="sm:w-2/4 lg:w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div>
            <h3 class="text-white text-left mb-5" >Partner area</h3>
            <h3 class="text-white text-left" >Team member area</h3>
          </div>
        </div>
        <!-- Column Content -->
        <div class="sm:w-2/4 lg:w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <h2 class="text-white font-bold flex justify-start text-lg mb-5">DATA PROTECTION</h2>
          <h3 class="text-white text-left mb-5" >Privacy Policy</h3>
          <h3 class="text-white text-left" >Terms and Conditions</h3>
        </div>
      </div>
       <div class="mx-auto py-4 px-5 absolute bottom-0" id="copy">
        <p class="text-gray-500 text-md">
          &copy; {{ new Date().getFullYear() }} DatWit
        </p>
      </div>
    </section>
  </footer>
</template>

<style>
#copy{
  transform: translateX(-45%);
  left:45%;
}
</style>
