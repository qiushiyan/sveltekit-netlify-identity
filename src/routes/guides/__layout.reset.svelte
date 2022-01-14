<script>
  import "../../styles/app.css";
  import netlifyIdentity from "netlify-identity-widget";
  import { onMount } from "svelte";
  import { auth } from "../../store";
  import Button from "$lib/button.svelte";
  import Title from "$lib/title.svelte";
  import { setupAuth } from "../../utils";
  onMount(() => {
    setupAuth();
  });

  const handleLogin = () => {
    netlifyIdentity.open();
  };

  const handleLogout = () => {
    netlifyIdentity.logout();
  };
</script>

<header>
  <nav>
    <Title title="Ninja Gaming Guides" />
    <div class="links">
      {#if $auth.email}
        <p on:click={handleLogout}>hi, {$auth.username}</p>
      {:else}
        <Button on:click={handleLogin}>login in</Button>
      {/if}
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

  p {
    margin-left: 10px;
    font-size: 0.8em;
    display: inline;
    text-decoration: underline;
  }
</style>
