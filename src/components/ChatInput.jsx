import { useContext } from "react";
import { Contexts } from "../Contexts/Contexts";

let ChatInput = (props) => { 

    const {items, setItems} = useContext(Contexts);

    let reSize = (event) => {
        const box = event.target;
        const padding = window.getComputedStyle(box).padding;
        const padx = parseFloat(padding.substring(0, padding.length - 2));
        box.style.height = window.getComputedStyle(box).lineHeight;
        const scrollHeight = box.scrollHeight;
        box.style.height = (scrollHeight - 2 * padx) + 'px';
    };

    let handleEvent = (event) => {
        if(event.keyCode === 13 && !event.shiftKey) {
            event.preventDefault();
            let output = event.target.value.trim();
            setItems([...items, output]); 
            event.target.value = "";
            reSize(event);
        }
    }

    let handle_event = handleEvent.bind(this);
    let re_size = reSize.bind(this);
    
    return (
        <textarea placeholder={props.placeholder} 
            onChange={re_size} onKeyDown={handle_event}
            rows={props.min} className={props.className}>
        </textarea>
    );
}

export default ChatInput;