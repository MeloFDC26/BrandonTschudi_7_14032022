import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// utilisation d'axios comme variable global dans le front
app.config.globalProperties.axios = axios;
app.use(router);
app.mount("#app");