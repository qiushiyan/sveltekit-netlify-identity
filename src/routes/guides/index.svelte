<script lang="ts">
  import { fetchGuides } from "../../utils/";
  import { afterUpdate } from "svelte";
  import { auth } from "../../store";
  import { fly } from "svelte/transition";
  let guides = [];

  afterUpdate(async () => {
    if ($auth.authReady) {
      const data = await fetchGuides($auth.email, $auth.token);
      if (data.guides) {
        guides = data.guides;
      }
    }
  });
</script>

<div class="guides" in:fly>
  {#if !$auth.authReady}
    <p>loading ...</p>
  {:else if guides.length > 0}
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
