<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12">
        <transition name="slide"  mode="out-in">
          <router-view> </router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch('initStocks')
  }
}
</script>

<style>
body {
  padding: 20px;
}

.slide-enter-active {
  animation: slide-in 150ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 150ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transition: translateY(-30px);
    opacity: 0;
  }
  to {
    transition: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transition: translateY(0);
    opacity: 1;
  }
  to {
    transition: translateY(-30px);
    opacity: 0;
  }
}

</style>
