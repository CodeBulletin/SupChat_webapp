let Channel = (props) => {
    return (
        <div className={"Channel"} id={props.id}>
            <label htmlFor={"x_" + props.id}>
                <input
                    type={"radio"}
                    name={"Channel-Select"}
                    id={"x_" + props.id} value={props.id}
                    />
                <span>#</span>
                <span>{props.name}</span>
            </label>
        </div>
    )
};

export default Channel;