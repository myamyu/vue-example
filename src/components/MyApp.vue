<template>
  <div>
    <p>おいらがコンポーネントだよ</p>
  </div>
</template>
<script lang="ts">
import {Component, Vue, Inject, Emit} from 'vue-property-decorator';

@Component
class MyApp extends Vue {

}
export default MyApp;
</script>
<style lang="stylus" scoped>

</style>
