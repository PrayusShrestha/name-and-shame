import Tag from "../components/Review/Tag";

export function renderTags(tags) {
    if (tags.length > 0) {
        return tags.map((tag, index) => (
            <Tag key={index}
                name={tag.name}
            />
        ));
    } else {
        return;
    }
};
