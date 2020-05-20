<script>
  import { onMount } from "svelte";
  import { config, CodeMirror } from "../codemirror/codemirror";
  import { source } from "../store/source";

  const refs = {};
  let editor;
  onMount(() => {
    editor = CodeMirror.fromTextArea(refs.editor, config);

    editor.on("change", instance => {
      $source = instance.getValue();
      localStorage.setItem("source", $source);
    });
  });
</script>

<div class="column is-6 ">
  <textarea bind:value={$source} bind:this={refs.editor} />
</div>
