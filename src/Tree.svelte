<script>
  export let nodes;
</script>

{#each nodes as { component, props, content }}
  <svelte:component this={component} {...props}>
    {#if typeof content === "string"}
      {content}
    {:else if typeof content === "object" && content.length > 0}
      <svelte:self nodes={content} />
    {/if}
  </svelte:component>
{/each}
