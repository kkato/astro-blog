export const site = {
  title: "kkato.dev",
  description: "Kubernetes やデータベースなど、インフラまわりの技術ブログ",
  author: "Ken Kato",
  prompt: "kkato@dev",
};

export const socials = [
  { name: "github", label: "GitHub", url: "https://github.com/kkato/" },
  { name: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/ken-kato/" },
  { name: "x", label: "X", url: "https://twitter.com/kkato25" },
  { name: "mastodon", label: "Mastodon", url: "https://social.kkato.app/@kkato" },
] as const;

// 記事の front matter の category はここに並べた name のどれかにする
export const categories = [
  { slug: "kubernetes", short: "k8s", name: "Kubernetes", description: "おうちクラスタの構築・運用、周辺ツール" },
  { slug: "database", short: "db", name: "Database", description: "PostgreSQL やストレージエンジンの仕組み" },
  { slug: "linux", short: "linux", name: "Linux", description: "OS まわりの設定やセットアップ" },
  { slug: "devtools", short: "dev", name: "DevTools", description: "開発を楽にするツールや Tips" },
  { slug: "career", short: "life", name: "Career", description: "転職や大学院など" },
] as const;

export type Category = (typeof categories)[number];

export const navItems = [
  { href: "/posts/", command: "ls", label: "posts" },
  { href: "/categories/", command: "tree", label: "categories" },
  { href: "/search/", command: "grep", label: "search" },
  { href: "/about/", command: "whoami", label: "about" },
];
