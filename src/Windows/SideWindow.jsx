import ChannelList from "./MainWindow/ChatWindow/ChannelList";

let SideWindow = () => {
    let channels = ["test_channel1", "test_channel2", "test_channel3", "test_channel4"];
    return (
        <div className="SideWindow">
            <ChannelList channels={channels}/>
        </div>
    );
}

export default SideWindow;