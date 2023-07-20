<script>
  import { skills } from "../data/skills.js";
</script>

<h2 class="p-4 sm:p-10 border-b-4 sticky top-0 bg-bg border-slate-800">Skills</h2>
<section class="flex flex-col border-b-8 border-slate-800">
  {#each skills as skill}
    <div class="border-b-4 last:border-0 border-slate-800" id={skill.id} data-scrollable-section="true">
      <h3 class="p-4 sm:p-10 border-b-2 border-slate-800">{skill.heading}</h3>
      <div class="grid grid-cols-2 p-4 sm:p-10 gap-4">
        <ul>
          {#each skill.listLeft as item}
            <li>{item}</li>
          {/each}
        </ul>
        <ul>
          {#each skill.listRight as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
    </div>
  {/each}
</section>
