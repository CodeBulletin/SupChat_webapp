import ChatInput from "../../../components/ChatInput";
import EmojiPicker from "emoji-picker-react";

let ChatInputWindow = (props) => {
    return (
        <div className="ChatInputWindow">
            <div className="padded_chatdiv">
                <ChatInput maxHeight={400} min={1} defaultHeight={'25px'} className={"input_textbox"} placeholder={'Message'}/>
                {/* <EmojiPicker /> */}
            </div>
        </div>
    );
}

export default ChatInputWindow;