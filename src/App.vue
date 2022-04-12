<template>
  <div>
    <button @click="showMessageBox('info')">Show info</button>
    <button @click="showMessageBox('success')">Show success</button>
    <button @click="showMessageBox('warn')">Show warn</button>
    <button @click="showMessageBox('danger')">Show danger</button>
  </div>
  <!-- <message-box
    title="App"
    content="This is Content"
    type="warn"
  ></message-box> -->
</template>

<script>
import { MessageBox } from './components/MyUI';

export default {
  name: 'App',
  methods: {
    showMessageBox (type) {
      this.$messageBox[type]({
        title: 'App',
        content: 'this is content',
        type: 'warn'
      }, ()=> {
        console.log('open')
      });
    }
  },
  components: {
    MessageBox
  }
}
</script>

