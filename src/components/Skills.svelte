<script>
  import { skills } from "../data/skills.js";
</script>

<h2 class="p-4 border-y-2 sticky top-0 bg-bg border-slate-800">Skills</h2>
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
