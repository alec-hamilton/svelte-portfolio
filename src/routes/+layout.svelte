<script>
  // export const ssr = false;
  import "../app.css";
  import Header from "../components/layout/Header.svelte";
  import Footer from "../components/layout/Footer.svelte";
</script>

<Header />
<slot />
<Footer />

<style lang="postcss">
  :global(body) {
    background-color: theme(colors.bg);
    font-family: theme(fontFamily.body);
  }
</style>
