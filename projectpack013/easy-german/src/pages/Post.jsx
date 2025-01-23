// File: src/pages/Post.jsx
import { useParams } from "react-router-dom";
import { getPostBySlug } from "../lib/posts";
import ReactMarkdown from "react-markdown";

function Post() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <div>Post bulunamadı</div>;
  }

  return (
    <div className="blog-container">
      <header className="blog-header">
        <a href="#" className="blog-category">
          Almanca Öğrenme
        </a>
        <h1 className="blog-title">{post.title}</h1>
        <p className="blog-excerpt">{post.excerpt}</p>
        <time className="blog-date" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </header>

      <article className="blog-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>

      {/* Okuma İlerlemesi Göstergesi */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-500 transition-all duration-300"
        style={{ width: `${readingProgress}%` }}
      />
    </div>
  );
}

export default Post;
