function Tag(props) {
    let count;
    if (props.count) {
        count = <div>{props.count}</div>
    }
    return (
        <div className="Tag">
            <span>
                <div>{props.name}</div>
                {count}
            </span>
        </div>
    );
}

export default Tag;
