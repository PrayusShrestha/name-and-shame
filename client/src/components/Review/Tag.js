import './Tag.css';

function Tag(props) {
    let count;
    if (props.count) {
        count = <div>{props.count}</div>
    }
    return (
        <div className="Tag" id = "tag">
            <span>
                <div>{props.name}</div>
                {count}
            </span>
        </div>
    );
}

export default Tag;
