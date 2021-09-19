import Tag from './Tag';
import './Review.css';
import { renderTags, renderTrashCans } from '../../utils/renderUtils';

function Review(props) {
    let tags = renderTags(props.review.tags);
    let date = new Date(props.review.timestamp);
    let trashCans = renderTrashCans(props.review.trashiness);

    return (
        <div className="Review">
            <h3 id = "review-title">{props.review.title}</h3>
            <div id = "review-content">
                <div id = "review-left">
                    <div id = "review-trash"><span>{trashCans}</span></div>
                    <div className="review-tags">{tags}</div>
                </div>
                <div id = "review-right">
                    <p id = "review-descrip">{props.review.description}</p>
                    <div id = "review-time"><span>{date.toLocaleString()}</span></div>
                </div>
            </div>
        </div>
    );
}

export default Review;
