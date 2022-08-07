<template>
  <div id="app">
    <!-- <button class="btn btn-lg" @click="storeFormMul">RUNNNNN</button> -->
    <component :is="this.$route.meta.layout || 'div'">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </component>
  </div>
</template>

<script>

export default {
  name: "App",
  mounted() {
    this.$store.commit('SET_USER_FROM_LOCALSTORAGE')
    // this.format()
  },

  methods: {

  }
};
</script>