import { useContext } from "react";
import { ChatContext } from "../../contexts/chat_contex";
import MarkdownRenderer from "./MarkdownRenderer"

let ChatWindow = (props) => {
    const {items} = useContext(ChatContext);
    console.log(items);
    return (
        <div className="ChatWindow" id={props.id}>
            <ul> {
                items.map(item => {
                    return <li>
                        <MarkdownRenderer content={item} className={"msg"} />
                    </li>
                })
            }</ul>
        </div>
    );
}

export default ChatWindow;