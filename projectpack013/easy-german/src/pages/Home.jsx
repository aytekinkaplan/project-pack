import { Link } from "react-router-dom";
import { getAllPosts } from "../lib/posts";

function Home() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Almanca Öğrenme Blogu</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/post/${post.slug}`}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-2">{post.excerpt}</p>
            <div className="text-sm text-gray-500">
              {new Date(post.date).toLocaleDateString()}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
