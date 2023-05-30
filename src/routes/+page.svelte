<script>
	import Project from "../components/Project.svelte";
	import { projects } from "../data/projects.js";
</script>

<main>
	<h2 class="p-4 border-b-2 sticky top-0 bg-bg border-slate-800">Projects</h2>
	{#each projects as project}
		<Project
			name={project.name}
			imageUrl={project.imageUrl}
			description={project.description}
			stack={project.stack}
			githubUrl={project.githubUrl}
			liveUrl={project.liveUrl}
		/>
	{/each}
</main>
