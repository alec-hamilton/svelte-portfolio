<script>
  export let name;
  export let id;
  export let description;
  export let stack;
  export let githubUrl;
  export let liveUrl;
</script>

<section {id} data-scrollable-section="true" class="border-b-4 border-slate-800 last:border-0">
  <h3 class="p-4 sm:p-10 border-b-2 border-slate-800">{name}</h3>
  <div class="p-4 sm:p-10 border-b-2 border-slate-800">
    <h4 class="pb-2 sm:pb-8">Description</h4>
    <p>{description}</p>
  </div>
  <div class="p-4 sm:p-10 border-b-2 border-slate-800">
    <h4 class="pb-2 sm:pb-8">Stack</h4>
    <div class="flex flex-row flex-wrap gap-2">
      {#each stack as item}
        <div class=" p-2 sm:p-4 border border-slate-800">{item}</div>
      {/each}
    </div>
  </div>
  <div class="grid grid-cols-2 border-slate-800">
    <a
      href={githubUrl}
      target="_blank"
      rel="noreferrer"
      class="w-100 py-2 sm:py-6 text-center underline border-r border-slate-800">GitHub</a
    >
    <a
      href={liveUrl}
      target="_blank"
      rel="noreferrer"
      class="w-100 py-2 sm:py-6 text-center underline border-l border-slate-800">Live version</a
    >
  </div>
</section>
