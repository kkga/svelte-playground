<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<div on:click={() => dispatch("clicked")}>
  <slot />
</div>
