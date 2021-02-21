<template>
  <div>
    <img :src="author.img" width="72" height="72" />
    <div>
      <h4>Author</h4>
      <p>{{ author.name }}</p>
      <p>{{ author.bio }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
});
</script>
