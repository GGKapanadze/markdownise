<script>
  export let output;
</script>

<style>
  .output {
    border-left: 5px solid black;
    padding-left: 100px !important;
    min-height: 91vh;
  }
</style>

<div
  class="content has-background-grey-lighter output column is-6"
  style="padding-left:10px !important; padding-top:12px !important">
  {@html output}
</div>
