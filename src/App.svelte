<script lang="ts">
  import { tree } from "./stores.js";

  import Input from "./Input.svelte";
  import Tree from "./Tree.svelte";
  import Heading from "./Heading.svelte";
  import Div from "./Div.svelte";
  import Paragraph from "./Paragraph.svelte";

  let color: string;
  let size: number;

  $: console.log(color);
  $: console.log(size);

  function handleChange(e: CustomEvent) {
    let name: string = e.detail.name;
    let value: any = e.detail.value;
    if (name == "color") {
      color = value;
    } else if (name == "size") {
      size = value;
    }
  }

  const properties = [
    {
      prop: "color",
      label: "Color",
      type: "enum",
      values: ["red", "yellow", "green"],
    },
    {
      prop: "size",
      label: "Size",
      type: "number",
    },
  ];

  function addToTree(node, tree) {
    tree.push(node);
    return tree;
  }

  function addHeading() {
    tree.update((t) =>
      addToTree(
        {
          component: Heading,
          content: "hello again",
          children: [],
        },
        tree
      )
    );
  }
  console.log(tree);
</script>

<main>
  <Tree nodes={$tree} />

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

  /* h1 { */
  /*   text-transform: uppercase; */
  /*   font-size: size; */
  /*   color: color; */
  /*   font-weight: 100; */
  /* } */
</style>
