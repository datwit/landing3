<template>
  <ul class="accordion">
    <li class="accordion__item">
    <div
      class="accordion__trigger"
      :class="{'accordion__trigger_active': visible}"
      @click="open">

      <h3 :class="{'head-active':visible}">{{title}}</h3>
      <svg class="h-8 w-8 text-secondary2" :class="{'is-active':visible}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>

      <transition
        name="accordion"
        @enter="start"
        @after-enter="end"
        @before-leave="start"
        @after-leave="end">

        <div class="accordion__content"
          v-show="visible">
          <ul class="p-4">
            <slot name="accordion-content">{{cont}}</slot>
          </ul>
        </div>
      </transition>
    </li>
  </ul>
</template>

<style>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;
}
.is-active {
    transform: rotate(180deg);
}
.head-active{
  color: #e69c24;
}
.accordion__item {
  cursor: pointer;
  border-bottom: 1px solid #ebebeb;
  position: relative;
  width:100%;
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 10px 20px;
  align-items: center;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
.accordion__content{
  background: #eff0f2;
  border-left: 3px solid #e69c24;
}
</style>

<script>
export default {
  props: ['title','cont'],
  data() {
    return {
      Accordion: {
        count: 0,
        active: null,
        index: null
      }
    };
  },
  provide() {
    return { Accordion: this.Accordion };
  },
  computed: {
    visible() {
      return this.index === this.Accordion.active;
    }
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    }
  },
  created() {
    this.index = this.Accordion.count++;
  }
};
</script>
