<script>
  import Project from "../components/Project.svelte";
  import Skills from "../components/Skills.svelte";
  import About from "../components/About.svelte";
  import { projects } from "../data/projects.js";
  import { skills } from "../data/skills.js";

  import { onMount } from "svelte";

  onMount(() => {
    const bullets = document.querySelectorAll("li > div");
    const headings = document.querySelectorAll("[data-bullet-heading=true]");

    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      let closestIndex = 0;
      let smallestPositiveDistance = Infinity;

      for (let i = 0; i < headings.length; i++) {
        let distanceFromTop = headings[i].offsetTop - scrollPosition;

        if (distanceFromTop > 0 && distanceFromTop < smallestPositiveDistance) {
          smallestPositiveDistance = distanceFromTop;
          closestIndex = i;
        }
      }

      bullets.forEach((bullet) => {
        bullet.classList.remove("bg-slate-800");
      });

      bullets[closestIndex].classList.add("bg-slate-800");
    };

    window.addEventListener("scroll", handleScroll);
  });
</script>

<main class="grid grid-cols-5">
  <div class="col-span-3">
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
  <!-- if element is the closest to the top of the viewport - highlight the dot 
	use gpt idea and standard css to add active class-->
  <nav class="flex flex-col p-4 col-span-2 border-l-2 border-slate-800">
    <div class="sticky top-4">
      <h3 class="pb-4">Projects</h3>
      <ul class="flex flex-col pb-4 gap-2">
        {#each projects as project}
          <li class="flex items-center">
            <div class="w-4 h-4 rounded-full mr-4 border-2 border-slate-800" />
            <a>{project.name}</a>
          </li>
        {/each}
      </ul>
      <h3 class="pb-4">Skills</h3>
      <ul class="flex flex-col pb-4 gap-2">
        {#each skills as skill}
          <li class="flex items-center">
            <div class="w-4 h-4 rounded-full mr-4 border-2 border-slate-800" />
            <a>{skill.heading}</a>
          </li>
        {/each}
      </ul>
      <h3 class="pb-4">About me</h3>
      <ul class="flex items-center">
        <li class="flex items-center">
          <div class="w-4 h-4 rounded-full mr-4 border-2 border-slate-800" />
          <a>About me</a>
        </li>
      </ul>
    </div>
  </nav>
</main>
