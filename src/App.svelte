<script lang="ts">
	import Input from "./Input.svelte";

	export let name: string;
	let color: string;
	let size: number;

	$: console.log(color);
	$: console.log(size);

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

	function handleChange(e: CustomEvent) {
		let name: string = e.detail.name;
		let value: any = e.detail.value;
		if (name == "color") {
			color = value;
		} else if (name == "size") {
			size = value;
		}
	}
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		text-transform: uppercase;
		font-size: size;
		color: color;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>{name}</h1>

	{#each properties as { prop, label, type, values }}
		{#if type == 'enum'}
			<Input
				name={prop}
				{label}
				type="select"
				on:change={handleChange}
				{values} />
		{:else if type == 'number'}
			<Input name={prop} {label} type="number" on:change={handleChange} />
		{/if}
	{:else}
		<div>sorry, no props here</div>
	{/each}
</main>
