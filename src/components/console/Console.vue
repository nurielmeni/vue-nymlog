<template>
  <section class="console">
    <h1>Console</h1>
    <ul :id="name">
      <li v-for="(entry, index) in entries" :key="index">
        <ConsoleEntry
          :timestamp="entry.timestamp"
          :logger="entry.logger"
          :level="entry.level"
          :message="entry.message"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import ConsoleEntry from "../consoleEntry/ConsoleEntry.vue";

export default {
  components: {
    ConsoleEntry
  },
  props: {
    name: String
  },
  data() {
    return {
      isConnected: false,
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
  sockets: {
    connect() {
      // Fired when the socket connects.
      this.isConnected = true;
    },

    disconnect() {
      this.isConnected = false;
    },

    // Fired when the server sends something on the "messageChannel" channel.
    updateConsole(data) {
      this.entries.push(data);
    }
  },
  methods: {}
};
</script>

<style src="./console.css" scoped />
