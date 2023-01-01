<script>
  if (import.meta.hot) {
    import.meta.hot.on("vite:beforeUpdate", () => {
      // console.log("Running before update!!");
    });
    import.meta.hot.on("vite:afterUpdate", () => {
      // console.log("Running after update!!");
      // https://github.com/hakimel/reveal.js/issues/1177#issuecomment-86051667
      deck.slide(deck.getIndices().h, deck.getIndices().v);
    });
  }

  import "reveal.js/dist/reveal.css";

  import Reveal from "reveal.js";
  import { onMount, tick } from "svelte";
  import Presentation from "./Presentation.svelte";

  export let app;
  export let reveal;
  let deck;
  onMount(async () => {
    await tick();
    deck = new Reveal(reveal);
    deck.initialize();
  });
  
</script>

<svelte:head>
  <title>{app.name}</title>
</svelte:head>

<div class="reveal">
  <div class="slides">
    <Presentation />
  </div>
</div>

