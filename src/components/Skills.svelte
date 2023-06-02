<script>
  import { skills } from "../data/skills.js";
</script>

<h2 class="p-4 sm:p-6 border-y-2 sticky top-0 bg-bg border-slate-800">Skills</h2>
<section class="flex flex-col">
  {#each skills as skill}
    <div class="border-b-2 border-slate-800" id={skill.id} data-scrollable-section="true">
      <h3 class="p-4 sm:p-6 border-b-2 border-slate-800">{skill.heading}</h3>
      <div class="grid grid-cols-2 p-4 sm:p-6 gap-4">
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
