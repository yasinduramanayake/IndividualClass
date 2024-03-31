<template>
  <div>
    <h2>{{ heading }}</h2>

    <v-btn @click="sendData()">Send Data</v-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {
      emitingData: "",
    };
  },
  props: {
    heading: String,
  },
  methods: {
    sendData() {
      this.emitingData = "Data Emited SuccessFully";
      this.$emit("emitMessage", this.emitingData);
    },
  },
};
</script>

<style lang="scss"></style>
