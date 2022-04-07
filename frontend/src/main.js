import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import PostComponent from "./components/Post.vue";

const app = createApp(App);

// Utilisation d'axios comme variable global dans le frontend
app.config.globalProperties.axios = axios;
app.use(router);
app.component('PostComponent', PostComponent);
app.mount("#app");

