import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { marked } from "marked";

function MarkdownRenderer({ filePath = "../mdposts/class01.md" }) {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    // Markdown dosyasını fetch etme
    fetch(filePath)
      .then((response) => response.text())
      .then((text) => {
        // Markdown'ı HTML'e çevirme
        const htmlContent = marked.parse(text);
        setMarkdownContent(htmlContent);
      });
  }, [filePath]);

  return <div dangerouslySetInnerHTML={{ __html: markdownContent }} />;
}
MarkdownRenderer.propTypes = {
  filePath: PropTypes.string,
};

export default MarkdownRenderer;
