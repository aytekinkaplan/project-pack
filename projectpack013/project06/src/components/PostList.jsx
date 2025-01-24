import { useEffect, useState } from "react";

const posts = import.meta.glob("../posts/*.md"); // Markdown dosyalarını glob ile al

function MarkdownPost({ filePath }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    import(filePath).then((module) => setContent(module.default));
  }, [filePath]);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export default function PostList() {
  return (
    <div>
      <h1>Post Listesi</h1>
      {Object.keys(posts).map((path, index) => (
        <MarkdownPost key={index} filePath={path} />
      ))}
    </div>
  );
}
