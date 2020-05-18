<script>
  import "bulma/css/bulma.css";
  import "@fortawesome/fontawesome-free/css/all.css";
  import Nav from "./components/Nav.svelte";
  import MarkdownEditor from "./components/MarkdownEditor.svelte";
  import Output from "./components/Output.svelte";
  import DOMPurify from "dompurify";
  import marked from "marked";
  import hljs from "highlight.js";

  let source = `
  # Markdownise v1.0 🖋
  ## [GGKpanadze](https://github.com/ggKapanadze)
  ---
  `;
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code, language) {
      const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
      return hljs.highlight(validLanguage, code).value;
    },
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  });

  $: output = DOMPurify.sanitize(marked(source));
</script>

<style>

</style>

<main>
  <Nav />
  <div class="columns is-gapless">
    <MarkdownEditor bind:source />
    <Output {output} />
  </div>
</main>
