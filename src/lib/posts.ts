import { getCollection, type CollectionEntry } from "astro:content";
import { categories, type Category } from "./site";

export type Post = CollectionEntry<"posts">;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("posts", (post) => import.meta.env.DEV || !post.data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function categoryOf(post: Post): Category {
  return categories.find((c) => c.slug === post.data.category)!;
}

const dateFormatter = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Tokyo" });

// 2026-03-14 の形にそろえる
export function formatDate(date: Date): string {
  return dateFormatter.format(date);
}

// Markdown の記法を落として検索・要約用の文字列にする
export function toPlainText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/^(import|export) .*$/gm, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_>|~-]{1,3}/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function summaryOf(post: Post, length = 100): string {
  const text = toPlainText(post.body ?? "");
  return text.length > length ? text.slice(0, length) + "…" : text;
}
