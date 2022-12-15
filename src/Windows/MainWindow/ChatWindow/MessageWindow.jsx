import { useContext } from "react";
import { Contexts } from "../../../Contexts/Contexts";
import MarkdownRenderer from "../../../components/MarkdownRenderer"

let MessageWindow = (props) => {
    const {items} = useContext(Contexts);
    console.log(items);
    return (
        <div className="MessageWindow">
            <div className="inner_window">
                <ul> {
                    items.map(item => {
                        return <li>
                            <MarkdownRenderer content={item} className={"msg"} />
                        </li>
                    })
                }</ul>
            </div>
        </div>
    );
}

export default MessageWindow;