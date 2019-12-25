<template>
  <section class="console"></section>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      entries: [
        {
          _id: "5e0322a4009c3a0011496f6a",
          timestamp: "2019-12-25T08:49:41.299Z",
          logger: "",
          level: "Debug",
          message: "Testing...",
          stacktrace: ""
        }
      ]
    };
  },
  methods: {}
};
</script>

<style src="./console.css" scoped />