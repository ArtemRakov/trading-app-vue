<template>
  <div>
    <app-stoke v-for='stock in stockes' :stock='stock' :key='stock.id'></app-stoke>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Stoke from './Stock.vue'
export default {
  computed: {
    ...mapGetters([
      'stockPortfolio'
    ]),
    stockes() {
      return this.stockPortfolio
    }
  },
  components: {
    appStoke: Stoke
  }
}
</script>
