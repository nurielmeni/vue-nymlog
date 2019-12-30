<template>
  <div class="console-entry">
    <span class="timestamp">{{ timestamp }}</span>
    <span class="logger">{{ logger }}</span>
    <span :class="level.toLowerCase()">[{{ level }}]</span>
    <span class="message">{{ message }}</span>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    message: String,
    level: String,
    logger: String,
    timestamp: String
  },
  data() {
    return {
      expanded: false
    };
  }
};
</script>
<style scoped>
div.console-entry > span {
  padding-right: 6px;
}
div.console-entry > span.info {
  color: #18aac3;
}
div.console-entry > span.debug {
  color: #f39912;
}
div.console-entry > span.error {
  color: #cf3030;
}
div.console-entry > span.warning {
  color: #e1ff37;
}
</style>