<script>
	import "../app.css";
</script>

<header class="flex flex-col">
	<h1 class="font-display">Alec Hamilton</h1>
  <h2>Full Stack Developer</h2>
</header>

<slot />

<style lang="postcss">
	:global(body) {
		background-color: theme(colors.bg);
	}
</style>
