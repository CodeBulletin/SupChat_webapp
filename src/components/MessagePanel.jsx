import ChatNavbar from "./chat/ChatNavbar";
import ChatWindow from "./chat/ChatWindow";
import ChatInput from "./chat/ChatInput";
import PeopleDetails from "./chat/PeopleDetails";

function MessagePanel() {
    return (
        <div className="MessagePanel">
            <ChatNavbar />
            <div className="MessageWindow">
                <div className="ChatPanel"> 
                    <ChatWindow />
                    <ChatInput />
                </div>
                <PeopleDetails />
            </div>
        </div>
    );
}

export default MessagePanel;