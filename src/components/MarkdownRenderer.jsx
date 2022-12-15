import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkHint from "remark-hint";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";


const MarkdownRenderer = (props) => {
    return (
        <ReactMarkdown className={props.className + " markdown_renderer"}
            remarkPlugins={
                [
                    [remarkHint, {}],
                    [remarkBreaks, {}],
                    [remarkGfm, {}],
                    [remarkGemoji, {}]
                ]
            } 
            rehypePlugins={
                [
                    [rehypeHighlight, {
                        prefix: "code-",
                        ignoreMissing: true
                    }]
                ]
            }>
            {props.content}
        </ReactMarkdown>
    );
}

export default MarkdownRenderer;