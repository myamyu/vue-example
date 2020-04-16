<template>
  <ul class="buttons">
    <li><button @click="message('きー')">きー</button></li>
    <li><button @click="message('かー')">かー</button></li>
    <li><button @click="message('ぴー')">ぴー</button></li>
  </ul>
</template>
<script lang="ts">
import {Component, Vue, Inject, Emit} from 'vue-property-decorator';

@Component
class SayButtons extends Vue {
  @Emit()
  message(message:string):string {
    return message;
  }
}
export default SayButtons;
</script>
<style lang="postcss" scoped>
.buttons {
  display: flex;
  padding: 0;
  margin: 0;
  width: 100%;
  justify-content: space-evenly;

  & > li {
    display: block;
    width: 70%;
    text-align: center;

    & > button {
      line-height: 2em;
      padding: 0 1em;
    }
  }
}
</style>
