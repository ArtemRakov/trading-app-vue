<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand"> StockTrader </router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to='/portfolio' tag='li' activeClass='active'> <a> Portfolio </a> </router-link>
          <router-link to='/stocks' tag='li' activeClass='active'> <a> Stocks </a> </router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <p class="navbar-text"> Funds: {{ funds | currency }}</p>
          <li><a href="#" @click="endDay"> End Day</a href="#"></li>
          <li class="dropdown" :class="{open: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
            <a href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false">Save & Load <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="saveData">Save data</a></li>
              <li><a href="#" @click="loadData">Load data</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return({
      isDropdownOpen: false
    })
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put('data.json', data)
    },
    loadData() {
      this.fetchData()
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  }
}
</script>

<style>

</style>
