import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts, summaryOf } from "@/lib/posts";
import { site } from "@/lib/site";

// Hugo 時代と同じ /index.xml で RSS を配信する
export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: site.title,
    description: site.description,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: summaryOf(post, 200),
      link: `/posts/${post.id}/`,
    })),
  });
}
