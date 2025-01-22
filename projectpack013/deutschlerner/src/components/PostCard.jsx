export default function PostCard({ post }) {
  const { frontmatter, markdown } = post;

  // Tarihi formatlama
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{frontmatter.title}</h2>
      <p className="text-gray-600 mb-4">{formatDate(frontmatter.date)}</p>
      <p className="text-gray-700">
        {markdown.length > 150 ? markdown.slice(0, 150) + "..." : markdown}
      </p>
    </div>
  );
}
