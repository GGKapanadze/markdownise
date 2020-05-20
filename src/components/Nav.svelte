<script>
  import ExportPDF from "./ExportPDF.svelte";
</script>

<style>
  .hero {
    border-bottom: 4px solid black;
  }
  .title {
    margin-top: 8px;
  }
</style>

<section class="hero is-link is-small">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <h1 class="title">Markdownise 🖋</h1>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <span class="navbar-item">
              <ExportPDF />
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</section>
