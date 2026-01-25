import Parser from "rss-parser";

const parser = new Parser();

export async function GET() {
  try {
    const feed = await parser.parseURL(
      "https://medium.com/feed/@oyku-sahin"
    );

    const posts = feed.items.slice(0, 6).map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.contentSnippet,
    }));

    return Response.json(posts);
  } catch (error) {
    return new Response("Failed to fetch Medium posts", { status: 500 });
  }
}
