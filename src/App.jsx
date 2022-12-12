import ServerPanel from "./components/ServerPanel";
import ChannelPanel from "./components/ChannelPanel";
import MessagePanel from "./components/MessagePanel";

function App() {
    return (
        <div className="App">
            <ServerPanel />
            <ChannelPanel />
            <MessagePanel />
        </div>
    );
}

export default App;
