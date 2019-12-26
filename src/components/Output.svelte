<script>
  import marked from "marked";
  export let output;
</script>

<style>
  .ressult {
    width: 50%;
    border: solid 1px black;
    height: 85vh;
    background: #ffffff;
    overflow: auto;
  }

  .output {
    width: 100%;
    padding: 0 2em;
    color: black;
  }
</style>

<div class="ressult col s6">
  <div class="output">
    {@html output}
  </div>
</div>
