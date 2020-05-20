<script>
  import { compile } from "../services/compiler";
  import { source } from "../store/source";
  import jsPDF from "jspdf";
  import html2pdf from "html2pdf.js";
  let clicked = false;

  function generate() {
    clicked = !clicked;

    setTimeout(() => {
      html2pdf()
        .from(document.getElementById("html2canvas"))
        .set({
          pagebreak: { mode: ["avoid-all", "css", "legacy"] },
          margin: 1,
          filename: "myfile.pdf",
          image: { type: "png", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
          dpi: 300,
          letterRendering: true,
          useCORS: true
        })
        .save("markdownise_pdf");
      clicked = !clicked;
    }, 1000);
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
