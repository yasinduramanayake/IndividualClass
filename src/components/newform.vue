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
                v-model="form.first_name"
              >
              </v-text-field>
            </v-col>
            <v-col lg="6" cols="12" md="6">
              <v-text-field
                placeholder="Enter Value...."
                v-model="form.last_name"
              >
              </v-text-field>
            </v-col>
            <v-col lg="6" cols="12" md="6">
              <v-text-field
                placeholder="Enter Value...."
                v-model="form.address"
              >
              </v-text-field>
            </v-col>
            <v-col lg="6" cols="12" md="6">
              <v-text-field placeholder="Enter Value...." v-model="form.nic">
              </v-text-field>
            </v-col>

            <v-btn color="primary" block="" @click="submitData()"
              ><span class="text-colors">
                <span class="child_one">Submit</span></span
              ></v-btn
            >
          </v-row>
        </v-form>
      </v-container>
    </v-sheet>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
    };
  },
  created() {
    this.initializeData();
  },
  props: {
    selecteditem: Object,
    currentindex: String,
  },

  methods: {
    submitData() {
      //   this.$emit("emptyarray", true);
      this.form.currentindex = this.currentindex;
      this.$emit("updateddata", this.form);
    },

    initializeData() {
      this.form = this.selecteditem;
    },
  },
};
</script>
<style lang="scss"></style>
