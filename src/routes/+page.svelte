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

    const isScrolledToBottom = () => {
      const scrollableElement = document.documentElement;
      const isScrolledToBottom =
        scrollableElement.scrollTop + scrollableElement.clientHeight >=
        scrollableElement.scrollHeight;

      return isScrolledToBottom;
    };

    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      let closestIndex = 0;
      let smallestPositiveDistance = Infinity;

      const stickyHeadingHeight = document.querySelector("[data-sticky-heading=true]").offsetHeight;

      for (let i = 0; i < sections.length; i++) {
        if (isScrolledToBottom()) {
          closestIndex = sections.length - 1;
          break;
        } else {
          let distanceFromTop =
            sections[i].offsetTop + sections[i].offsetHeight - scrollPosition - stickyHeadingHeight;

          if (distanceFromTop > 0 && distanceFromTop < smallestPositiveDistance) {
            smallestPositiveDistance = distanceFromTop;
            closestIndex = i;
          }
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
    <About />
    <Skills />
    <h2 class="p-4 sm:p-10 sticky top-0 bg-bg border-b-4 border-slate-800">Projects</h2>
    {#each projects as { name, id, description, stack, githubUrl, liveUrl }}
      <Project {name} {id} {description} {stack} {githubUrl} {liveUrl} />
    {/each}
  </div>
  <Nav />
</main>
