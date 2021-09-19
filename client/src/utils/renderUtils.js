import Tag from "../components/Review/Tag";

export function renderTags(tags) {
    if (tags.length > 0) {
        return tags.map((tag, index) => (
            <Tag key={index}
                name={tag}
            />
        ));
    } else {
        return;
    }
};

export function renderTrashCans(count) {
    let trash = [...Array(count)].map((val, i) => (
        <img src="/trash.png" alt = "trash can"></img>
    ));
    return (
        <div className="avg-trash-center">
            <span className="avg-trash">{trash}</span>
        </div>
    );
}
