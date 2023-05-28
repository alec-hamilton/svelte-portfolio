<script>
	import Project from "../components/Project.svelte";
	import { projects} from "../data/projects.js";
</script>

<main>
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
