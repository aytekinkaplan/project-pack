// src/components/PostList.jsx
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

export default function PostList({ posts }) {
  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <Link key={post.slug} to={`/post/${post.slug}`}>
          <PostCard post={post} />
        </Link>
      ))}
    </div>
  );
}
