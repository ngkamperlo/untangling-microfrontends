import { createApp } from "vue";
import App from "./App.vue";

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(App);
  app.mount(el);
};

export { mount };
