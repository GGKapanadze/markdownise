<script context="module">
  let _h2pPromise, _h2p;

  _h2pPromise = import("html2pdf.js");
  _h2pPromise.then(md => {
    _h2p = md;
  });
</script>

<script>
  import { compile } from "../services/compiler";
  import { source } from "../store/source";
  import { onMount } from "svelte";

  let clicked = false,
    h2p;

  onMount(async () => {
    if (!_h2p) {
      h2p = await import("html2pdf.js");
    } else {
      h2p = _h2p;
    }
  });

  async function generate() {
    clicked = !clicked;
    h2p
      .default()
      .from(document.getElementById("html2canvas"))
      .set({
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
        margin: 0.2,
        filename: "myfile.pdf",
        image: { type: "png", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        dpi: 300,
        letterRendering: true,
        useCORS: true
      })
      .save("markdownise_pdf")
      .then(() => {
        clicked = !clicked;
      });
  }
</script>

<button
  class="button is-danger"
  class:is-inverted={!clicked}
  class:is-loading={clicked}
  on:click={generate}>
  <span class="icon">
    <i class="fas fa-file-pdf" />
  </span>
  <span>Export PDF</span>
</button>


<style>

</style>