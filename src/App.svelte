<script>
  import Nav from "./components/Nav.svelte";
  import MarkdownEditor from "./components/MarkdownEditor.svelte";
  import Output from "./components/Output.svelte";
  import marked from "marked";

  let source = `
  # Markdownise v0.1 🚀
  ## [GGKpanadze](https://github.com/ggKapanadze)
  ---
  `;
  $: output = marked(source);
</script>

<style>
  main {
    background-color: #000 !important;
    color: #0000 !important;
  }
  .editor {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
  }
</style>

<main class="grey lighten-1">
  <Nav />
  <div class="row editor">
    <MarkdownEditor bind:source />
    <Output {output} />
  </div>
</main>
