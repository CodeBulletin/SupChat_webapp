import TextBox from "../TextBox";

let ChatInput = (props) => {
    return (
        <div className="ChatInput">
            <div className="padded_chatdiv">
                <TextBox maxHeight={400} min={1} defaultHeight={'25px'} className={"input_textbox"} placeholder={'Message'}/>
            </div>
        </div>
    );
}

export default ChatInput;