import Vue from 'vue';
import MyApp from '@/components/MyApp.vue';

Vue.config.productionTip = false;
const app = new Vue({
  el: '#app',
  data: function() {
    return {
      mydata: false,
    };
  },
  components: {
    MyApp,
  },
  mounted: function() {
    console.debug('mounted');
    const myapp = this.$children[0];
    myapp.$on('say', (text:string) => {
      alert(text);
    });
  },
});
