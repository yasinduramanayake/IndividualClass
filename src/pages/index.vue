<template>
  <div>
    <!-- <test /> -->

    <v-card title="Title" elevation="8">
      <v-card-text>hello</v-card-text>
    </v-card>

    <br /><br />
    <v-sheet elevation="2">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col lg="3" md="6" cols="4" sm="6" class="bg-red"> Hello </v-col>
            <v-col lg="3" md="6" cols="4" sm="6" class="bg-red"> Hello </v-col>
            <v-col lg="3" md="6" cols="4" sm="6" class="bg-red"> Hello </v-col>
          </v-row>
        </v-container>
      </v-card-text></v-sheet
    >

    <br /><br />
    <v-carousel cycle="">
      <v-carousel-item
      
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>



    <v-icon icon="mdi-abjad-arabic"></v-icon>
    <v-icon icon="mdi-calendar-import-outline"></v-icon>
    <div class="d-flex justify-content-center">
      <v-btn elevation="6" color="primary"
        ><span class="text-danger"> Button </span>
      </v-btn>
    </div>
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
