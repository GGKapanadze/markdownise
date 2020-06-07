<script context="module">
  let _codeMirrorPromise, _codeMirror, _config;

  _codeMirrorPromise = import("../codemirror/codemirror");
  _codeMirrorPromise.then(module => {
    _codeMirror = module.CodeMirror;
    _config = module.config;
  });
</script>

<script>
  import { onMount } from "svelte";
  import { source } from "../store/source";

  let refs = {};
  let codeMirror,
    config,
    editor,
    md,
    loading = true;

  onMount(async () => {
    if (!_codeMirror) {
      md = await _codeMirrorPromise;
      codeMirror = md.CodeMirror;
      config = md.config;
    } else {
      codeMirror = _codeMirror;
      config = _config;
    }
    editor = codeMirror.fromTextArea(refs.editor, config);
    editor.on("change", instance => {
      $source = instance.getValue();
      localStorage.setItem("source", $source);
    });
    loading = false;
  });
</script>

<style>
  progress {
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
    width: 75%;
  }

  .material-background {
    background-color: #24343c;
  }
</style>

<div class="column is-6" class:material-background={loading}>
  {#if loading}
    <progress class="progress is-large is-warning" max="100">30%</progress>
  {/if}

  <textarea
    aria-label="editor"
    bind:value={$source}
    bind:this={refs.editor}
    class:is-hidden={loading} />
</div>
