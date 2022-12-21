import Channel from "../../../components/Channel";
import { ChannelContext } from "../../../Contexts/Contexts";

let ChannelList = (props) => {

    let onChange = (event) => {
        console.log(event.target.value);
    }

    onChange = onChange.bind(this);

    return (
        <div className="ChannelList" onChange={onChange}>
            {
                props.channels.map((channel) => { 
                    return (<Channel id={channel} name={channel} />);
                })
            }
        </div>
    );

}

export default ChannelList;