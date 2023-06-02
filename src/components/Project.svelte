<script>
  export let name;
  export let imageUrl;
  export let description;
  export let stack;
  export let githubUrl;
  export let liveUrl;
</script>

<section class="border-b-2 border-slate-800">
  <h3 class="p-4 border-b-2 border-slate-800" data-bullet-heading="true">{name}</h3>
  <p>{imageUrl}</p>
  <div class="p-4 border-b-2 border-slate-800">
    <h4 class="pb-2">Description</h4>
    <p>{description}</p>
  </div>
  <div class="p-4 border-b-2 border-slate-800">
    <h4 class="pb-2">Stack</h4>
    <div class="flex flex-row gap-2">
      {#each stack as item}
        <div class="p-2 border border-slate-800">{item}</div>
      {/each}
    </div>
  </div>
  <div class="grid grid-cols-2 border-slate-800">
    <a href={githubUrl} class="w-100 py-2 text-center underline border-r border-slate-800">GitHub</a
    >
    <a href={liveUrl} class="w-100 py-2 text-center underline border-l border-slate-800"
      >Live version</a
    >
  </div>
</section>
