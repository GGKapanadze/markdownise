import App from "./App.svelte";
import "bulma/css/bulma.css";
import "../node_modules/highlight.js/styles/a11y-light.css";
import "../node_modules/codemirror/lib/codemirror.css";

const app = new App({
  target: document.body,
});

export default app;
