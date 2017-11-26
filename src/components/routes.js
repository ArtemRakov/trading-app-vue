import Home from './Home.vue';
import Portfolio from './portfolio/Portfolio.vue';
import Stocks from './stocks/Stocks.vue';


export const routes = [
  { path: '', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/stocks', component: Stocks }
]