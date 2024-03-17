<template>
  <div class="paddings"></div>
  <div>
    <v-container>
      {{ getArrayLength }}
      <v-sheet elevation="8">
        <div v-if="useritems.length != 0">
          <v-data-table
            :headers="headers"
            :items="useritems"
            item-key="name"
            items-per-page="5"
          ></v-data-table>
        </div>
        <div v-else class="notfound">
          <span class="notfoundtext d-flex justify-content-center"
            >No Data Found</span
          >
        </div>
      </v-sheet>
    </v-container>

    <v-dialog v-model="show" width="800" height="700">
      <newform
        :selecteditem="selecteditem"
        :currentindex="currentindex"
        @updateddata="getUpdatedData"
      />
    </v-dialog>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      show: false,
      selecteditem: {},

      currentindex: {},
      useritems: [],
      headers: [
        { title: "First Name", value: "first_name" },
        { title: "Last Name", value: "last_name" },
        { title: "Email", value: "email" },
      ],
    };
  },
  methods: {
    openModel(item, index) {
      this.show = true;
      this.selecteditem = item;
      this.currentindex = index;
    },

    async sendRequest() {
      await axios
        .get("https://reqres.in/api/users")
        .then((res) => {
          this.useritems = res.data.data;
          console.log(this.useritems);
        })
        .catch((res) => {});

      // to be execute
    },

    getUpdatedData(data) {
      this.useritems[data.currentindex] = data;

      this.show = false;
    },
  },

  computed: {
    getArrayLength() {
      return this.useritems.length;
    },
    
  },

  async created() {
    await this.sendRequest();
  },
};
</script>
