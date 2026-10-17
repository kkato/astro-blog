# kkato.dev

個人の技術ブログサイトです。Astro で静的サイトを生成し、GitHub Pages でホスティングしています。

## 記事を書く

`src/content/posts/<slug>.md`（または `.mdx`）を作る。URL は `/posts/<slug>/` になる。

```markdown
---
title: "記事タイトル"
date: 2026-10-13T12:00:00+09:00
category: "Kubernetes"   # src/lib/site.ts の categories のどれか
tags: ["kubernetes"]     # 検索にだけ使う
draft: false             # true にすると本番では出ない (npm run dev では見える)
---
```

- 画像は `public/images/<slug>/` に置いて `![](/images/<slug>/xxx.png)` で参照する
- ` ```mermaid ` のコードブロックは図として描画される
- `.mdx` では `import` したコンポーネントや JSX を本文に書ける
- About ページは `src/content/about.md`

## 動かす

```sh
npm run dev       # http://localhost:4321
npm run build     # 型チェックして dist/ に書き出す
npm run preview   # 書き出した結果を確認する
```
