<script>
  import Nav from "./components/Nav.svelte";
  import Editor from "./components/Editor.svelte";
  import Output from "./components/Output.svelte";
  import { compile } from "./services/compiler";
  import { source } from "./store/source";
  import jsPDF from "jspdf";

  let output;
  $: output = compile($source);

</script>

<main>
  <Nav />
  <div class="columns is-gapless">
    <Editor />
    <Output {output} />
  </div>
</main>
