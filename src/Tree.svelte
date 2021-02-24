<script>
  import { createEventDispatcher } from "svelte";
  export let nodes;

  const dispatch = createEventDispatcher();
</script>

{#each nodes as { component, props, content } (component)}
  <svelte:component
    this={component}
    on:clicked={() => dispatch("selected", { selected: component })}
    {...props}
  >
    {#if typeof content === "string"}
      {content}
    {:else if typeof content === "object" && content.length > 0}
      <svelte:self nodes={content} />
    {/if}
  </svelte:component>
{/each}
