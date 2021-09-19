import Tag from './Tag';
import './Review.css';
import { renderTags } from '../../utils/renderUtils';

function Review(props) {
    let tags = renderTags(props.review.tags);

    return (
        <div className="Review">
            <h3 id = "review-title">{props.review.title}</h3>
            <div id = "review-content">
                <div id = "review-left">
                    <span id = "review-trash">{props.review.trashiness}/5</span>
                    <div className="review-tags">{tags}</div>
                    <span>{props.review.votes}</span>
                </div>
                <div id = "review-right">
                    <p id = "review-descrip">{props.review.description}</p>
                    <span id = "review-time">{props.review.timestamp}</span>
                </div>
            </div>
        </div>
    );
}

export default Review;
