import { useState, useEffect } from "react";
import { getAllPosts } from "../utils/mdUtils";
import PostList from "../components/PostList";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const allPosts = await getAllPosts();
        console.log("Loaded posts:", allPosts); // Debug için
        setPosts(allPosts);
      } catch (error) {
        console.error("Error in Home:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  if (loading) return <div className="p-8">Yükleniyor...</div>;
  if (error) return <div className="p-8 text-red-600">Hata: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Almanca Öğrenme Blogu</h1>
      {posts.length === 0 ? (
        <p className="text-gray-600">Henüz blog yazısı bulunmamaktadır.</p>
      ) : (
        <>
          <div className="mb-4 text-gray-600">
            Toplam {posts.length} yazı bulundu
          </div>
          <PostList posts={posts} />
        </>
      )}
    </div>
  );
}
