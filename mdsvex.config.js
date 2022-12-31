import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
    quotes: false,
  },
  layout: {
    // notes: "src/lib/mdsvex-layout-notes.svx",
    // mainpage: "src/lib/mdsvex-layout-mainpage.svx",
  },
  remarkPlugins: [],

  rehypePlugins: [],
});

export default config;
