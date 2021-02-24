<script>
  export let nodes;
</script>

{#each nodes as { component, content, children }}
  <svelte:component this={component}>
    {#if children && children.length > 0}
      <svelte:self nodes={children} />
    {/if}
    {#if content}
      {content}
    {/if}
  </svelte:component>
{/each}
