<script>
	export let name;
	export let imageUrl;
	export let description;
	export let stack;
	export let githubUrl;
	export let liveUrl;
</script>

<div>
	<h2>{name}</h2>
	<p>{imageUrl}</p>
	<p>{description}</p>
	<div>
		{#each stack as item}
			<p>{item}</p>
		{/each}
	</div>
	<p>{githubUrl}</p>
	<p>{liveUrl}</p>
</div>
