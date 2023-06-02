<script>
  import { onMount } from "svelte";

  import About from "../components/About.svelte";
  import Project from "../components/Project.svelte";
  import Nav from "../components/layout/Nav.svelte";
  import Skills from "../components/Skills.svelte";

  import { projects } from "../data/projects.js";

  onMount(() => {
    const bullets = document.querySelectorAll("li > div");
    const sections = document.querySelectorAll("[data-scrollable-section=true]");

    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      let closestIndex = 0;
      let smallestPositiveDistance = Infinity;

      const stickyHeadingHeight = 98;

      // console.log(scrollPosition);
      // console.log(sections[0].offsetHeight);

      for (let i = 0; i < sections.length; i++) {
        let distanceFromTop =
          sections[i].offsetTop + sections[i].offsetHeight - scrollPosition - stickyHeadingHeight;

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
    <h2 class="p-4 sm:p-6 border-b-2 sticky top-0 bg-bg border-slate-800">Projects</h2>
    {#each projects as project}
      <Project
        name={project.name}
        id={project.id}
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
