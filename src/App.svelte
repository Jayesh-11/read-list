<script lang="ts">
  import Footer from "./Footer.svelte";
  import List from "./List.svelte";
</script>

<div class="primary">
  <List />
  <Footer />
</div>

<style>
  .primary {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
</style>
