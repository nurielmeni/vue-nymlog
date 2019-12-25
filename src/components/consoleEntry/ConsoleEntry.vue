<template></template>

<script>
export default {
  props: {
    _id: String,
    message: String,
    level: String,
    logger: String,
    timestamp: String,
    stacktrace: String
  },
  data() {
    return {
      id: this._id,
      entry: {
        timestamp: this.timestamp,
        logger: this.logger,
        level: this.level
      },
      stacktrace: this.stacktrace,
      expanded: false
    };
  }
};
</script>

<style scoped>
</style>