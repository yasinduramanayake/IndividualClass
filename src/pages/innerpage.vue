<template>
  <div>Hello {{ firstname }}</div>

  {{ routename }}
</template>
<script>
export default {
  data() {
    return {
      firstname: this.$route.params.firstname,
      routename: this.$route.name,
    };
  },
};
</script>
