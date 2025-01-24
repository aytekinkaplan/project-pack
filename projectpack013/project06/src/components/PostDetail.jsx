import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const posts = import.meta.glob("../posts/*.md");

function PostDetail() {
  const { id } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const postPaths = Object.keys(posts);
    posts[postPaths[id]]().then((module) => setContent(module.default));
  }, [id]);

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default PostDetail;
