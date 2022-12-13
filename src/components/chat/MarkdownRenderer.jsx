import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkHint from "remark-hint";


const MarkdownRenderer = (props) => {
    return (
        <ReactMarkdown remarkPlugins={[remarkHint]} rehypePlugins={[rehypeHighlight]}>{props.content}</ReactMarkdown>
    );
}

export default MarkdownRenderer;