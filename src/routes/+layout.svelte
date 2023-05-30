<script>
	import "../app.css";
</script>

<header class="flex flex-col border-b-2 border-slate-800">
	<h1 class="font-display">Alec Hamilton</h1>
	<p>Full Stack Developer</p>
	<address class="not-italic"><a href="mailto:alechamilton.dev@gmail.com">alechamilton.dev@gmail.com</a></address>
</header>

<slot />

<style lang="postcss">
	:global(body) {
		background-color: theme(colors.bg);
		font-family: theme(fontFamily.body);
	}
</style>
