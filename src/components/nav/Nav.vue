<template>
  <nav>
    <div class="navbar-default">
      <ul>
        <li v-for="(nav, index) in navs" :key="index">
          <a :href="nav.href">{{ nav.name }}</a>
        </li>
      </ul>
      <div class="brand">
        <img :src="logo" :alt="logoAlt" />
        <h1>{{ name }}</h1>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: {
    name: String,
    logo: String
  },
  data() {
    return {
      logoAlt: this.name + " Logo",
      navs: [
        { href: "/", name: "Home" },
        { href: "/about", name: "About" }
      ]
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./nav.css" scoped />