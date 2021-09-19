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
                    <div id = "review-trash"><span>{props.review.trashiness}/5</span></div>
                    <div className="review-tags">{tags}</div>
                    <span>{props.review.votes}</span>
                </div>
                <div id = "review-right">
                    <p id = "review-descrip">{props.review.description}</p>
                    <div id = "review-time"><span>{props.review.timestamp}</span></div>
                </div>
            </div>
        </div>
    );
}

export default Review;
