<script lang="ts">
  import { onMount } from "svelte";
  import { setupAuth } from "../utils";
  import { fly } from "svelte/transition";

  import { auth } from "../store/";
  onMount(() => {
    setupAuth();
  });
</script>

<div class="index" in:fly={{ x: -20 }}>
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
