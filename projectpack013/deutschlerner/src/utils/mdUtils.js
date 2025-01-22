function parseFrontMatter(content) {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontMatterRegex);

  if (!match) {
    return {
      frontmatter: {
        title: "Untitled",
        date: new Date().toISOString(),
      },
      content: content,
    };
  }

  const [, frontMatterString, markdownContent] = match;
  const frontmatter = {};

  frontMatterString.split("\n").forEach((line) => {
    const [key, ...valueArr] = line.split(":");
    if (key && valueArr.length) {
      const value = valueArr
        .join(":")
        .trim()
        .replace(/^["']|["']$/g, "");
      frontmatter[key.trim()] = value;
    }
  });

  return {
    frontmatter: {
      title: frontmatter.title || "Untitled",
      date: frontmatter.date || new Date().toISOString(),
    },
    content: markdownContent.trim(),
  };
}

export const getAllPosts = async () => {
  try {
    const mdModules = import.meta.glob("/src/content/posts/*.md", {
      query: "?string",
      import: "default",
    });

    console.log("Found MD files:", Object.keys(mdModules));

    const posts = await Promise.all(
      Object.entries(mdModules).map(async ([filepath, loader]) => {
        const content = await loader();
        const { frontmatter, content: markdown } = parseFrontMatter(content);
        const slug = filepath.split("/").pop().replace(".md", "");

        return {
          slug,
          frontmatter,
          markdown,
        };
      })
    );

    console.log("Processed posts:", posts);

    return posts.sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );
  } catch (error) {
    console.error("Error loading posts:", error);
    throw error;
  }
};

export const getPostBySlug = async (slug) => {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
};
