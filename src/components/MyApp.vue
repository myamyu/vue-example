<template>
  <div class="oira">
    <p>おいらがコンポーネントだよ</p>
    <say-buttons @message="say"></say-buttons>
  </div>
</template>
<script lang="ts">
import {Component, Vue, Inject, Emit} from 'vue-property-decorator';
import SayButtons from '@/components/SayButtons.vue';

@Component({
  components: {
    SayButtons,
  },
})
class MyApp extends Vue {
  @Emit()
  say(message:string):string {
    return `おいら曰く「${message}」`;
  }
}
export default MyApp;
</script>
<style lang="postcss" scoped>
  .oira {
    box-sizing: border-box;
    padding: 1em;
    border: solid 2px #ccc;
    width: 70%;
    margin: 1em auto;
  }
</style>
