<script context="module" lang="ts">
  import type { ErrorLoad } from "@sveltejs/kit";
  export const load: ErrorLoad = ({ error, status }) => {
    return {
      props: {
        message: `${status}: ${error.message}`,
      },
    };
  };
</script>

<script>
  export let message;
</script>

<div class="error">
  <h2>Oops</h2>
  <p>{message}</p>
  <a href="/guides">View all guides</a>
</div>

<style>
  .error {
    text-align: center;
    margin-bottom: 60px;
  }
</style>
