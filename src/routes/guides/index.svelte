<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  export const load: Load = async ({ fetch }) => {
    const res = await fetch("/.netlify/functions/guides");
    const data = await res.json();
    console.log(data);
    if (res.ok && data.guides) {
      return {
        props: { guides: data.guides },
      };
    }

    return { status: 401, error: data.msg };
  };
</script>

<script>
  export let guides;
</script>

<div class="guides">
  <ul>
    {#each guides as guide}
      <li>
        <a sveltekit:prefetch href={`/guides/${guide.id}`}>{guide.title}</a>
      </li>
    {/each}
  </ul>
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
