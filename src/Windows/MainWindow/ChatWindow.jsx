import ChatTipWindow from "./ChatWindow/ChatTipWindow";
import MessageWindow from "./ChatWindow/MessageWindow";
import ChatInputWindow from "./ChatWindow/ChatInputWindow";
import InfoWindow from "../InfoWindow";
import { useState, useEffect } from "react";
import { Contexts, ChannelContext } from "../../Contexts/Contexts";
import "../../Globals"

let ChatWindow = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        global.socket.on("rm", (data) => setItems([...items, data["message"]]));
    })
    return (
        <div className="ChatWindow">
            <ChatTipWindow />
            <div className="chat_container">
                <div className="user_chat_container"> 
                    <Contexts.Provider value={{items, setItems}}>
                        <MessageWindow items={items}/>
                        <ChatInputWindow setItems={setItems}/>
                    </Contexts.Provider>
                </div>
                <InfoWindow />
            </div>
        </div>
    );
}

export default ChatWindow;