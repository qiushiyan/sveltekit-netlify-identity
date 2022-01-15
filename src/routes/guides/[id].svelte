<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  export const load: Load = async ({ fetch, params }) => {
    const id = params.id;
    const res = await fetch(`/guides/${id}.json`);
    const { guide } = await res.json();

    if (res.ok) {
      return {
        props: { guide },
      };
    }

    return { status: 404, error: `guide ${id} not found` };
  };
</script>

<script lang="ts">
  import { scale } from "svelte/transition";
  export let guide;
</script>

<div class="guide" in:scale>
  <h2>{guide.title}</h2>
  <p>{guide.body}</p>
</div>

<style>
</style>
