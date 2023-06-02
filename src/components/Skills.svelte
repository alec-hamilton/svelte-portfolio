<script>
  import { skills } from "../data/skills.js";
</script>

<h2 class="p-4 border-y-2 sticky top-0 bg-bg border-slate-800">Skills</h2>
<section class="flex flex-col">
  {#each skills as skill}
    <div class="border-b-2 border-slate-800" id={skill.id}>
      <h4 class="p-4 border-b-2 border-slate-800" data-bullet-heading="true">{skill.heading}</h4>
      <div class="grid grid-cols-2 p-4 gap-4">
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
