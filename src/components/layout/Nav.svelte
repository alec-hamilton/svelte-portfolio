<script>
  import { projects } from "../../data/projects.js";
  import { skills } from "../../data/skills.js";

  const scrollToSection = (event) => {
    let section = document.getElementById(event.target.getAttribute("href").substring(1));
    section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = (event) => {
    const headerHeight = document.querySelector("header").offsetHeight;
    window.scrollTo({ top: headerHeight, behavior: "smooth" });
  };
</script>

<nav class="hidden sm:flex flex-col p-4 sm:p-10 col-span-2 border-l-8 border-zinc-800">
  <div class="sticky top-4">
    <h3 class="pb-8">About me</h3>
    <ul class="flex items-center pb-10">
      <li class="flex items-center">
        <div class="w-4 h-4 rounded-full mr-4 border-2 border-zinc-800" />
        <a href="#about" on:click|preventDefault={scrollToTop} class="sm:hover:text-zinc-700">About me</a>
      </li>
    </ul>
    <h3 class="pb-8">Skills</h3>
    <ul class="flex flex-col pb-10 gap-2">
      {#each skills as skill}
        <li class="flex items-center">
          <div class="w-4 h-4 rounded-full mr-4 border-2 border-zinc-800" />
          <a href={`#${skill.id}`} on:click|preventDefault={scrollToSection} class="sm:hover:text-zinc-700">{skill.heading}</a>
        </li>
      {/each}
    </ul>
    <h3 class="pb-8">Projects</h3>
    <ul class="flex flex-col pb-10 gap-2">
      {#each projects as project}
        <li class="flex items-center">
          <div class="w-4 h-4 rounded-full mr-4 border-2 border-zinc-800" />
          <a href={`#${project.id}`} on:click|preventDefault={scrollToSection} class="sm:hover:text-zinc-700">{project.name}</a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
