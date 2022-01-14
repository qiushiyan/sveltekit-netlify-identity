<script lang="ts">
  import Title from "$lib/title.svelte";
  import "../styles/app.css";
</script>

<header><Title title="ningja gaming" /></header>
<main><slot /></main>
<footer>
  <p>Copyright 2022 Ninja Gaming Guides</p>
</footer>

<style>
  header {
    display: flex;
    justify-content: center;
  }
  main {
    max-width: 960px;
    margin: 20px auto;
  }
  footer {
    text-align: center;
  }
</style>
