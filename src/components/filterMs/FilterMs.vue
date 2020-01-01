<template>
  <div :id="name">
    <label class="typo__label">Level</label>
    <multiselect
      v-model="value"
      :options="options"
      :multiple="true"
      placeholder="Type to search"
      @input="updateSelected"
      ><span slot="noResult"
        >Oops! No elements found. Consider changing the search query.</span
      ></multiselect
    >
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect
  },
  props: {
    name: String
  },
  data() {
    return {
      isConnected: false,
      value: [],
      options: ["info", "debug", "error", "warning"]
    };
  },
  methods: {
    updateSelected(value) {
      this.$emit("valueChanged", value);
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
