<script>
  import { selectedElement } from "./stores.js";

  let element;

  function handleClick() {
    selectedElement.set(element);
  }
</script>

<div
  class:selected={$selectedElement === element}
  on:click={handleClick}
  bind:this={element}
>
  <slot />
</div>

<style>
  .selected {
    outline: 2px solid lightblue;
  }
</style>
