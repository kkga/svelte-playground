<script lang="ts">
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	type InputType = "select" | "button" | "number";

	export let label: string;
	export let name: string;
	export let type: InputType;
	export let values: any[];

	function onChange(e) {
		dispatch("change", {
			name: name,
			value: e.target.value,
		});
	}
</script>

<style>
	div {
		display: grid;
		grid-template-columns: 1fr 3fr;
		align-items: center;
		gap: 1rem;
	}

	.button-group {
		display: flex;
		gap: 0;
	}
	.button-group > button {
		flex: 1;
		margin: 0;
	}
</style>

<div>
	<label for={name}>{label}</label>

	{#if type == 'select'}
		<select {name} on:input={onChange}>
			{#each values as value}
				<option {value}>{value}</option>
			{/each}
		</select>
	{:else if type == 'button'}
		<div class="button-group">
			{#each values as value}
				<button on:click={onChange} {value} {name}>{value}</button>
			{/each}
		</div>
	{:else if type == 'number'}<input on:input={onChange} type="number" />{/if}
</div>
