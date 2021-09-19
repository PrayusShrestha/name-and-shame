import Tag from "../components/Review/Tag";
import Review from "../components/Review/Review";

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
    if (count === 0) {return (<div>0/5</div>)}
    let trash = [...Array(count)].map((val, i) => (
        <img src="/trash.png" alt = "trash can"></img>
    ));
    return (
        <div className="avg-trash-center">
            <span className="avg-trash">{trash}</span>
        </div>
    );
}

export function renderReviews(reviews) {
    if (reviews.length > 0) {
        return reviews.map((review, index) => (
            <Review key={index}
                review={review}
            />
        ));
    } else {
        return;
    }
}
