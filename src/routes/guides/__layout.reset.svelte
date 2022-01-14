<script>
  import Title from "$lib/title.svelte";
  import "../../styles/app.css";
  import netlifyIdentity from "netlify-identity-widget";
  import { onMount } from "svelte";
  import { auth } from "../../store";
  onMount(() => {
    netlifyIdentity.init();
  });

  const handleLogin = () => {
    netlifyIdentity.open();
  };
</script>

<header>
  <nav>
    <Title title="Ninja Gaming Guides" />
    <div class="links">
      <button on:click|preventDefault={handleLogin}>login in</button>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/guides">Guides</a>
    </div>
  </nav>
</header>
<main>
  <slot />
</main>
<footer>
  <p>Copyright 2022 Ninja Gaming Guides</p>
</footer>

<style>
  header {
    text-align: center;
    background: rgba(0, 0, 0, 0.1);
  }
  main {
    max-width: 960px;
    margin: 20px auto;
  }
  footer {
    text-align: center;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 960px;
    margin: 0 auto;
  }
  .links {
    margin-left: auto;
  }
  a {
    margin-left: 10px;
  }
</style>
