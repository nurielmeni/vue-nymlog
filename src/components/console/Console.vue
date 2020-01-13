<template>
  <section class="console">
    <div id="actions">
      <filter-ms name="level" @valueChanged="setFilterLevel" />
      <div class="screen-select">
        <label>Screen</label>
        <input type="number" v-model="screen" @change="changeScreen" :id="screen" />
      </div>
    </div>

    <ul :id="name">
      <li v-for="(entry, index) in filteredEntries" :key="index">
        <ConsoleEntry
          :screen="entry.screen"
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
import FilterMs from "../filterMs/FilterMs.vue";

export default {
  components: {
    ConsoleEntry,
    FilterMs
  },
  props: {
    name: String
  },
  data() {
    return {
      isConnected: false,
      screen: null,
      entries: [
        {
          _id: "5e0322a4009c3a0011496f6a",
          timestamp: "2019-12-25T08:49:41.299Z",
          logger: "",
          level: "Debug",
          message: "Testing...",
          stacktrace: ""
        }
      ],
      filterLevel: []
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
      this.entries.unshift(data);
    }
  },
  methods: {
    setFilterLevel(value) {
      this.filterLevel = value;
    },
    // $socket is socket.io-client instance
    changeScreen() {
      this.$socket.emit("screenRoom", this.screen);
    }
  },
  computed: {
    filteredEntries() {
      return this.entries.filter(f => this.filterLevel.includes(f.level));
    }
  }
};
</script>

<style src="./console.css" scoped />
