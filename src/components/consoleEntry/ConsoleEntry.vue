<template>
  <div class="console-entry">
    <span class="screen">{{ screen }}</span>
    <span class="timestamp">{{ timestamp }}</span>
    <span class="logger">{{ logger }}</span>
    <span :class="level.toLowerCase()">[{{ level }}]</span>
    <span class="message">{{ message }}</span>
  </div>
</template>

<script>
export default {
  props: {
    screen: Number,
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
  padding-right: 4px;
  font-size: 14px;
}
div.console-entry > span.screen {
  background-color: #34a7ff;
  border: 1px solid #23292d;
  padding: 0 4px;
  text-align: right;
  border-radius: 6px;
  margin-right: 4px;
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