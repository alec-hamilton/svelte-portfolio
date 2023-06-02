<script>
  import { onMount } from "svelte";

  import About from "../components/About.svelte";
  import Project from "../components/Project.svelte";
  import Nav from "../components/layout/Nav.svelte";
  import Skills from "../components/Skills.svelte";

  import { projects } from "../data/projects.js";

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

    handleScroll();
    window.addEventListener("scroll", handleScroll);
  });
</script>

<main class="sm:grid grid-cols-5">
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
  <Nav />
</main>
