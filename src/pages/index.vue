<template>
  <div>
    <h2>Hello World</h2>
    <button @click="test()">Submit</button>
    <test />

    mkjnhbgfe nhgfdfhhg
  </div>
</template>

<script>
import test from "@/components/test.vue";
export default {
  components: {
    test,
  },
  methods: {
    test() {
      this.$router.push("/second");
    },
  },

  beforeCreate() {
    console.log("before created");
  },

  created() {},

  beforeMount() {
    console.log("before loaded");
  },

  mounted() {
    localStorage.setItem("loaded", "loaded");
  },
  beforeUpdate() {
    console.log("before updated");
  },
  updated() {
    console.log("updated");
  },
};
</script>
