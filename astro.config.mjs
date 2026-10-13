// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://kkato.dev",
  // Hugo 時代の URL (/posts/argocd/ など) をそのまま使えるようにする
  trailingSlash: "always",
  integrations: [mdx()],
  markdown: {
    // mermaid は色付けせず、ブラウザ側で図に変換する
    syntaxHighlight: { type: "shiki", excludeLangs: ["mermaid", "math"] },
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      defaultColor: false,
    },
  },
});
