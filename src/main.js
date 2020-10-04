import App from "./pages/HomePage.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
