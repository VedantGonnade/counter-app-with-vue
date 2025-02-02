import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown, faArrowUp, faS, faSpinner } from "@fortawesome/free-solid-svg-icons";
import App from "@/App.vue";
import "@/index.css";

library.add(faArrowDown, faArrowUp, faSpinner);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
