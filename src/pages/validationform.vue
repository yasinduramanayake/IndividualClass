<template>
  <div class="pt-10">
    <h2 class="text-center text-danger">Example Form Validation</h2>
    <div class="d-flex justify-content-center">
      <v-container>
        <v-sheet elevation="6" width="auto">
          <v-container>
            <v-form>
              <v-row>
                <v-col lg="6" cols="12" md="6">
                  <v-text-field
                    placeholder="Enter First Name...."
                    variant="outlined"
                    :rules="[required]"
                    id="id1"
                    v-model="form.first_name"
                  >
                  </v-text-field>
                </v-col>
                <v-col lg="6" cols="12" md="6">
                  <v-text-field
                    variant="outlined"
                    placeholder="Enter Last Name...."
                    v-model="form.last_name"
                  >
                  </v-text-field>
                </v-col>

                <v-col lg="6" cols="12" md="6">
                  <v-text-field
                    variant="outlined"
                    :rules="[check]"
                    placeholder="Enter Address...."
                    v-model="form.address"
                  >
                  </v-text-field>
                </v-col>
                <v-col lg="6" cols="12" md="6">
                  <v-text-field
                    variant="outlined"
                    :rules="[required, email]"
                    placeholder="Enter Email...."
                  >
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
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
    };
  },

  methods: {
    submitData() {
      //   this.$emit("emptyarray", true);
    },
  },
};
</script>
<style lang="scss"></style>
