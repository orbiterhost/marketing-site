import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');

  // Sort the blog posts by publication date in descending order (newest first)
  const sortedBlog = blog.sort((a, b) => {
    return new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf();
  });

  return rss({
    // `<title>` field in output xml
    title: 'Orbiter Blog',
    // `<description>` field in output xml
    description: 'Documenting our journey towards building an open web',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: sortedBlog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Compute RSS link from post `id`
      // This example assumes all posts are rendered as `/blog/[id]` routes
      link: `/blog/${post.id}/`,
    })),
  });
}
