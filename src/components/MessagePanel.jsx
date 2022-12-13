import ChatNavbar from "./chat/ChatNavbar";
import ChatWindow from "./chat/ChatWindow";
import ChatInput from "./chat/ChatInput";
import PeopleDetails from "./chat/PeopleDetails";
import { useState } from "react";
import { ChatContext } from "../contexts/chat_contex";

let MessagePanel = () => {
    const [items, setItems] = useState([]);
    return (
        <div className="MessagePanel">
            <ChatNavbar />
            <div className="MessageWindow">
                <div className="ChatPanel"> 
                    <ChatContext.Provider value={{items, setItems}}>
                        <ChatWindow id={'ChatWindow'} items={items}/>
                        <ChatInput setItems={setItems}/>
                    </ChatContext.Provider>
                </div>
                <PeopleDetails />
            </div>
        </div>
    );
}

export default MessagePanel;