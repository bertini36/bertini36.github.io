<script>

  import Navbar from "./components/Navbar.svelte";

  let active_page;

</script>

<div id="app">

  <Navbar on:routechange={evt => (active_page = evt.detail)} />

  {#if active_page}

      <svelte:component this={active_page} />

  {/if}

</div>
