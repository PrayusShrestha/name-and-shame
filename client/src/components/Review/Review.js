import Tag from './Tag';

function Review(props) {
    const renderTags = (tags) => {
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

    let tags = renderTags(props.review.tags);

    return (
        <div className="Review">
            <h3>{props.review.title}</h3>
            <p>{props.review.description}</p>
            <div className="review-tags">{tags}</div>
            <span>{props.review.votes}</span>
            <span>{props.review.timestamp}</span>
        </div>
    );
}

export default Review;
