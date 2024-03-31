<template>
  <div>
    <v-dialog max-width="500" v-model="show" scroll-strategy="">
      <exampleform
        :propForm="form"
        :loading="loading"
        :arraData="arrayData"
        @formData="getData"
      />
    </v-dialog>
  
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <v-btn @click="showDialog()">Show dialog</v-btn>
  </div>
</template>
<script>
import exampleform from "@/components/exampleform.vue";
export default {
  data() {
    return {
      show: false,
      loading: "",
      arrayData: [],
      form: {
        textfeild1: "Value 1",
        textfeild2: "Value 2",
        textfeild3: "Value 3",
        textfeild4: "Value 4",
      },
    };
  },
  components: {
    exampleform,
  },
  methods: {
    showDialog() {
      this.show = true;
      this.form.textfeild1 = "hello 1";
      this.form.textfeild2 = "hello 2";
      this.form.textfeild3 = "hello 3";
      this.form.textfeild4 = "hello 4";
      this.loading = false;
      this.arrayData = [
        {
          email: "item1",
        },
        {
          email: "ihgfgfgf",
        },
        {
          email: "ihgfgfgf",
        },
        {
          email: "ihgfgfgf",
        },
      ];
    },

    getData(value) {
      this.show = value.show;
      this.form = value;
    },
  },
};
</script>
