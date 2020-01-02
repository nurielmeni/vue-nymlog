<template>
  <div id="app">
    <Nav name="NYMLogger" logo="/img/nymLogger.png" />
    <Console />
  </div>
</template>

<script>
import Nav from "./components/nav/Nav.vue";
import Console from "./components/console/Console.vue";

export default {
  name: "app",
  components: {
    Nav,
    Console
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Inconsolata:400,700&display=swap");
body {
  padding: 0;
  margin: 0;
  /*font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;*/
  font-family: "Inconsolata", monospace;
  background-color: #213135;
  color: #dbfbd3;
  min-height: 100vh;
  height: 100%;
  width: 100vw;
}
</style>
