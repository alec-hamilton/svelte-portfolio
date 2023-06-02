<script>
  import { projects } from "../../data/projects.js";
  import { skills } from "../../data/skills.js";

  const scrollToSection = (event) => {
    let section = document.getElementById(event.target.getAttribute("href").substring(1));
    section.scrollIntoView({ behavior: "smooth" });
  };
</script>

<nav class="hidden sm:flex flex-col p-4 col-span-2 border-l-4 border-slate-800">
  <div class="sticky top-4">
    <h3 class="pb-4">Projects</h3>
    <ul class="flex flex-col pb-4 gap-2">
      {#each projects as project}
        <li class="flex items-center">
          <div class="w-4 h-4 rounded-full mr-4 border-2 border-slate-800" />
          <a href={`#${project.id}`} on:click|preventDefault={scrollToSection}>{project.name}</a>
        </li>
      {/each}
    </ul>
    <h3 class="pb-4">Skills</h3>
    <ul class="flex flex-col pb-4 gap-2">
      {#each skills as skill}
        <li class="flex items-center">
          <div class="w-4 h-4 rounded-full mr-4 border-2 border-slate-800" />
          <a href={`#${skill.id}`} on:click|preventDefault={scrollToSection}>{skill.heading}</a>
        </li>
      {/each}
    </ul>
    <h3 class="pb-4">About me</h3>
    <ul class="flex items-center">
      <li class="flex items-center">
        <div class="w-4 h-4 rounded-full mr-4 border-2 border-slate-800" />
        <a href="#about" on:click|preventDefault={scrollToSection}>About me</a>
      </li>
    </ul>
  </div>
</nav>
