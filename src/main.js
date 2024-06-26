/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";
import commonmixins from "./mixins/commonmixins";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/scss/exampleform.scss";
import "@/assets/scss/examplepracticle.scss";
// Composables
import { createApp } from "vue";

const app = createApp(App);

app.mixin(commonmixins);

registerPlugins(app);

app.mount("#app");
