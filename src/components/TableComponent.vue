<template>
  <div class="paddings"></div>
  <div>
    <v-container>
      <!-- {{ getArrayLength }} -->
      <v-sheet elevation="8">
        <div v-if="useritems.length != 0">
          <v-data-table
            :headers="headers"
            :items="useritems"
            item-key="name"
            items-per-page="5"
          >
            <template
              v-for="header in headers"
              :key="header.value"
              v-slot:[`item.${header.value}`]="props"
            >
              <div v-if="header.value === 'first_name'">
                <span class="text-danger"> {{ props.item.first_name }}</span>
              </div>
              <div v-if="header.value === 'last_name'">
                <span class="text-danger"> {{ props.item.last_name }}</span>
              </div>
              <div v-if="header.value === 'email'">
                <span class="text-danger"> {{ props.item.email }}</span>
              </div>

              <div v-if="header.value === 'action'">
                <v-btn
                  style="text-transform: capitalize"
                  color="danger"
                  @click="$router.push(`/innerpage/${props.item.first_name}`)"
                  >Direct</v-btn
                >
              </div>
            </template>
          </v-data-table>
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
        { title: "Action", value: "action" },
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
