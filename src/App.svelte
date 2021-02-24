<script lang="ts">
  import { tree } from "./stores.js";

  import Tree from "./Tree.svelte";
  import Heading from "./Heading.svelte";

  function addToTree(tree: Array<{}>, node) {
    return [...tree, node];
  }

  function addHeading() {
    tree.update((t) =>
      addToTree(t, {
        component: Heading,
        content: "hello again",
      })
    );
  }

  function hey(e) {
    console.log(e.detail);
  }
</script>

<main>
  <Tree on:selected={hey} nodes={$tree} />

  <button on:click={addHeading}>add heading</button>
</main>

<!--
  {#each properties as { prop, label, type, values }}
    {#if type == "enum"}
      <Input
        name={prop}
        {label}
        type="select"
        on:change={handleChange}
        {values}
      />
    {:else if type == "number"}
      <Input name={prop} {label} type="number" on:change={handleChange} />
    {/if}
  {:else}
    <div>sorry, no props here</div>
  {/each}
  -->
<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>
