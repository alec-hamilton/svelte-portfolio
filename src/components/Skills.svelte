<script>
  import { skills } from "../data/skills.js";
</script>

<section class="flex flex-col px-4 pt-4">
  {#each skills as skill}
    <div class="pb-4">
      <h4 class="pb-2">{skill.heading}</h4>
      <ul>
        {#each skill.list as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  {/each}
</section>
