import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import Unocss from "unocss/vite";
import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unocss({
      mode: "svelte-scoped",
      include: [/\.svelte$/, /\.svelte\.md$/, /\.svx$/],
      presets: [
        presetUno(),
        presetIcons({
          prefix: "i-",
          extraProperties: {
            display: "inline-block",
            "vertical-align": "middle",
          },
        }),
      ],
    }),
    svelte({
      extensions: [".svelte", ".svx"],
      preprocess: mdsvex(mdsvexConfig),
    }),
  ],
});
