const posts = import.meta.glob("/src/content/posts/*.md", { eager: true });

export function getAllPosts() {
  return Object.entries(posts)
    .map(([filepath, module]) => {
      const slug = filepath.split("/").pop().replace(".md", "");
      const content = module.default;
      const { title, date, excerpt } = module.metadata || {};

      return {
        slug,
        title,
        date,
        excerpt,
        content,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return getAllPosts().find((post) => post.slug === slug);
}
