import '../node_modules/materialize-css/dist/css/materialize.css';
import '../public/global.css';
import App from './App.svelte';

const app = new App({
	target: document.body
});

export default app;
