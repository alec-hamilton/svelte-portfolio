<script>
  export let name;
  export let id;
  export let description;
  export let stack;
  export let githubUrl;
  export let liveUrl;
</script>

<section class="border-b-2 border-slate-800" {id} data-scrollable-section="true">
  <h3 class="p-4 sm:p-6 border-b-2 border-slate-800">{name}</h3>
  <div class="p-4 sm:p-6 border-b-2 border-slate-800">
    <h4 class="pb-2 sm:pb-4">Description</h4>
    <p>{description}</p>
  </div>
  <div class="p-4 sm:p-6 border-b-2 border-slate-800">
    <h4 class="pb-2 sm:pb-4">Stack</h4>
    <div class="flex flex-row gap-2">
      {#each stack as item}
        <div class="p-2 border border-slate-800">{item}</div>
      {/each}
    </div>
  </div>
  <div class="grid grid-cols-2 border-slate-800">
    <a href={githubUrl} class="w-100 py-2 sm:py-4 text-center underline border-r border-slate-800">GitHub</a
    >
    <a href={liveUrl} class="w-100 py-2 sm:py-4 text-center underline border-l border-slate-800"
      >Live version</a
    >
  </div>
</section>
