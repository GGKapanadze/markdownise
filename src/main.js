import App from "./App.svelte";
import "bulma/css/bulma.css";
import "../public/global.css";
import "../node_modules/highlight.js/styles/default.css"

const app = new App({
  target: document.body,
});

export default app;
