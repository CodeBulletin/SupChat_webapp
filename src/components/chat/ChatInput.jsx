import TextBox from "../TextBox";

function ChatInput() {
    return (
        <div className="ChatInput">
            <div className="padded_chatdiv">
                <TextBox max={5} min={1} className={"input_textbox"} placeholder={'Message'}/>
            </div>
        </div>
    );
}

export default ChatInput;