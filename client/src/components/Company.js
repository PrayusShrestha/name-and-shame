import React from 'react';
import Review from './Review/Review';
import Tag from './Review/Tag';
import './Company.css';

import { renderTags } from '../utils/renderUtils';

class Company extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.match.params.name;

        this.state = {
            industry: '',
            reviews: [],
            tags: []
        };
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_SERVER_URI + '/companies/' + this.name)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    industry: res.industry,
                    reviews: res.reviews,
                    tags: res.tags
                });
            });
    }

    renderReviews(reviews) {
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

    getAverageTrashiness(reviews) {
        let count = 0;
        let trashinessSum = 0.0;

        for (let i in reviews) {
            count++;
            trashinessSum += parseInt(reviews[i].trashiness);
        }

        if (count === 0) return "No reviews";
        let avg = trashinessSum / count;
        return avg.toFixed(1) + "/5";
    }

    render() {
        let tags = renderTags(this.state.tags);
        let reviews = this.renderReviews(this.state.reviews);
        let avgTrashiness = this.getAverageTrashiness(this.state.reviews);

        return (
            <div className="Company">
                <div id = "company-header"></div>
                    <div  id = "company-name"><h1>{this.name}</h1></div>
                <h3>Average Trashiness</h3>
                <span>{avgTrashiness}</span>
                    <div className="company-tags"  class = "all-tags">
                        <div class = "tag">
                            {tags}
                        </div>
                    </div>
                <span>{this.state.industry}</span>
                <div className="company-tags">
                    {tags}
                </div>
                <div className="company-reviews">
                    {reviews}
                </div>
            </div>
        );
    }
}

export default Company;