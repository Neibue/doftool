<template>
  <div id="app">
    <Equipments />
  </div>
</template>

<script>
import Equipments from './components/Equipments.vue'

export default {
  name: 'App',
  components: {
    Equipments
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 80%;
  margin: auto;
}
</style>
