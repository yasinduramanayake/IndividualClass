<template>
  <div>
    <v-sheet elevation="6">
      <v-container>
        <v-form>
          <v-row>
            <v-col lg="6" cols="12" md="6">
              <v-text-field
                placeholder="Enter Value...."
                id="id1"
                v-model="form.textfeild1"
              >
              </v-text-field>
            </v-col>
            <v-col lg="6" cols="12" md="6">
              <v-text-field
                placeholder="Enter Value...."
                v-model="form.textfeild2"
              >
              </v-text-field>
            </v-col>
            <v-col lg="6" cols="12" md="6">
              <v-text-field
                placeholder="Enter Value...."
                v-model="form.textfeild3"
              >
              </v-text-field>
            </v-col>
            <v-col lg="6" cols="12" md="6">
              <v-text-field
                placeholder="Enter Value...."
                v-model="form.textfeild4"
              >
              </v-text-field>
            </v-col>

            <v-btn
              color="primary"
              block=""
              @click="submitData()"
              :loading="loading"
              ><span class="text-colors">
                <span class="child_one">Submit</span></span
              ></v-btn
            >

            <v-btn color="primary" block="" @click="resetData()"
              ><span class="text-colors">
                <span class="child_one">Rest</span></span
              ></v-btn
            >
          </v-row>
        </v-form>
      </v-container>
    </v-sheet>

    <span class="text-danger d-flex justify-content-center" v-if="loading">
      abc</span
    >
    <div v-for="item in arraData" :key="item">
      {{ item.email }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      testdata: "hello text",
      number1: 1,
      loading: true,
      array1: [
        {
          id: "item1",
          name: "item1",
          email: "item1",
        },
        {
          id: "name",
          name: "hnbgf",
          email: "ihgfgfgf",
        },
        {
          id: "name",
          name: "hnbgf",
          email: "ihgfgfgf",
        },
        {
          id: "name",
          name: "hnbgf",
          email: "ihgfgfgf",
        },
      ],
      form: {},
    };
  },

  props: {
    propForm: Object,
    loading: Boolean,
    arraData: Array,
  },
  created() {},
  methods: {
    submitData() {
      this.form.show = false;
      this.$emit("formData", this.form);
    },

    resetData() {
      this.form = {};
    },
  },
};
</script>
<style lang="scss"></style>
