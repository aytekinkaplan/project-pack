const POSTS = import.meta.glob("/src/content/posts/*.md", { eager: true });

export function getAllPosts() {
  return Object.entries(POSTS)
    .map(([filepath, post]) => {
      const slug = filepath.split("/").pop().replace(".md", "");
      return {
        slug,
        ...post.default.metadata,
        content: post.default.content,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return getAllPosts().find((post) => post.slug === slug);
}
