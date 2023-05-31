<script>
  import Project from "../components/Project.svelte";
  import Skills from "../components/Skills.svelte";
  import About from "../components/About.svelte";
  import { projects } from "../data/projects.js";
  import { skills } from "../data/skills.js";
</script>

<main class="flex">
  <div>
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
    <Skills />
    <About />
  </div>
  <nav>
    <h2>Projects</h2>
    <div class="flex flex-col">
      {#each projects as project}
        <a>{project.name}</a>
      {/each}
    </div>
    <h2>Skills</h2>
    <div class="flex flex-col">
      {#each skills as skill}
        <a>{skill.heading}</a>
      {/each}
    </div>
    <h2>About me</h2>
    <a>About me</a>
  </nav>
</main>
