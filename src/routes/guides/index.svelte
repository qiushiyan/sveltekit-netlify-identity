<script lang="ts">
  import { onMount } from "svelte";
  import { auth } from "../../store";
  let guides = [];

  onMount(async () => {
    if ($auth.authReady) {
      const res = await fetch(
        "/.netlify/functions/guides",
        $auth.email && {
          headers: {
            Authorization: `Bearer ${$auth.token}`,
          },
        }
      );

      const data = await res.json();
      // {msg} when error, {guides} when success
      if (data.guides) {
        guides = data.guides;
      }
    }
  });
</script>

<div class="guides">
  {#if guides.length > 0}
    <ul>
      {#each guides as guide}
        <li>
          <a sveltekit:prefetch href={`/guides/${guide.id}`}>{guide.title}</a>
        </li>
      {/each}
    </ul>
  {:else}
    <p>sorry you need to be logged in to see this</p>
  {/if}
</div>

<style>
  .guides {
    margin-top: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  a {
    display: inline-block;
    margin-top: 10px;
    padding: 10px;
    border: 1px dotted rgba(255, 255, 255, 0.2);
  }
</style>
