import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getPostBySlug } from "../utils/mdUtils";

export default function PostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const postData = await getPostBySlug(slug);
        setPost(postData);
      } catch (error) {
        console.error("Error loading post:", error);
      }
    };
    loadPost();
  }, [slug]);

  if (!post) return <div className="p-8">Yükleniyor...</div>;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Ana Sayfaya Dön
      </Link>
      <article className="prose prose-lg max-w-none">
        <h1>{post.frontmatter.title}</h1>
        <p className="text-gray-600">{formatDate(post.frontmatter.date)}</p>
        <ReactMarkdown>{post.markdown}</ReactMarkdown>
      </article>
    </div>
  );
}
