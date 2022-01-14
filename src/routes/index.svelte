<script lang="ts">
  import { auth } from "../store/";
  import Button from "$lib/button.svelte";
  import { onMount } from "svelte";
  import netlifyIdentity from "netlify-identity-widget";
  import { setupAuth } from "../utils";

  onMount(() => {
    setupAuth();
  });

  const handleLogout = () => {
    netlifyIdentity.logout();
    auth.logout();
  };
</script>

<div class="index">
  {#if $auth.email}
    <Button on:click={() => netlifyIdentity.open()}>login in</Button>
  {:else}
    <Button on:click={() => handleLogout()}>login out</Button>
  {/if}

  <h2>
    Welcome
    {#if $auth.email}
      <span>{$auth.username}</span>
    {/if}
  </h2>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laborum
    magnam deleniti recusandae, quis aperiam, architecto neque, voluptatem dicta
    expedita aut id voluptate omnis consectetur dolore! Quo quae perferendis vel
    dignissimos quasi illum aperiam dolores, id, laudantium voluptatibus fugiat
    accusantium impedit velit modi ratione iure qui culpa! Repellendus
    cupiditate aliquid quam magni. Laudantium, laboriosam quibusdam. Provident,
    quae incidunt! Aspernatur, vel?
  </p>
  <a href="/guides">View Guides</a>
  <a href="/about">About</a>
</div>

<style>
  .index {
    text-align: center;
    display: block;
    margin: 20px auto;
  }
</style>
