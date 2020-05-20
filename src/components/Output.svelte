<script>
  export let output;
</script>

<style>
  .output {
    border-left: 6px solid black;
    padding-left: 100px !important;
    min-height: 94vh;
  }

  :global(table) {
    border: solid 1px #440000;
    width: 95%;
  }

</style>

<div
  class="content output column is-6"
  style="padding-left:10px !important; padding-top:12px !important">
  <div id="html2canvas">
    {@html output}
  </div>
</div>
