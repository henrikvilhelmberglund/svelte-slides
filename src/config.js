import Highlight from "reveal.js/plugin/highlight/highlight";
import Markdown from "reveal.js/plugin/markdown/markdown";
import MathReveal from "reveal.js/plugin/math/math";
import RevealNotes from "reveal.js/plugin/notes/notes";

// Import theme
import "reveal.js/dist/theme/black.css";

// Import CSS for plugins
import "reveal.js/plugin/highlight/monokai.css";

export default {
  // App Config
  app: {
    name: "Reveal.js with Svelte and Vite",
  },
  // Reveal Config
  reveal: {
    plugins: [
      // Highlight,
      // Markdown,
      // RevealNotes
    ],
    hash: true,
  },
};
