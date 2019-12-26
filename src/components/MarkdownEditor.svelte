<script>
  export let source;
</script>

<style>
  div {
    padding-top: 10px;
    width: 50%;
    border: solid 1px black;
    height: 85vh;
    background: #ffffff;
  }

  textarea {
    font-size: 25px;
    border: none;
    width: 100%;
    height: 100%;
    background: #001628;
    color: #83ba52;
  }
</style>

<div class="col s6">
  <textarea id="" cols="30" rows="10" bind:value={source} />
</div>
