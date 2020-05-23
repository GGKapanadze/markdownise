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
    setTimeout(() => {
      editor = codeMirror.fromTextArea(refs.editor, config);
      editor.on("change", instance => {
        $source = instance.getValue();
        localStorage.setItem("source", $source);
      });
      loading = false;
    }, 1000);
  });
</script>

<style>
  progress {
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
    width: 75%;

  }
</style>

<div class="column is-6" class:has-background-grey-light={loading}>
  {#if loading}
    <progress class="progress is-large is-info" max="100">60%</progress>
  {/if}

  <textarea
    bind:value={$source}
    bind:this={refs.editor}
    class:is-hidden={loading} />
</div>
