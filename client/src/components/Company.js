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
        console.log(trashinessSum + " " + count);

        let avg = Math.round(trashinessSum / count);
        return [...Array(avg),].map((val, i) => (
            <img src="/trash.png"></img>
        ));
    }

    render() {
        let tags = renderTags(this.state.tags);
        let reviews = this.renderReviews(this.state.reviews);
        let avgTrashiness = this.getAverageTrashiness(this.state.reviews);

        return (
            <div className="Company">
                <div id = "company-header">
                    <div id = "company-name"><h1>{this.name}</h1></div>
                    <span>{this.state.industry}</span>
                    
                    <h3 id = "avg-trash-title">Average Trashiness</h3>

                    <div id = "avg-trash-center">
                        <span id = "avg-trash">{avgTrashiness}</span>
                    </div>

                    <div className="company-tags"  class = "all-tags">
                        {tags}
                    </div></div>

                <div className="company-reviews">
                    {reviews}
                </div>
            </div>
        );
    }
}

export default Company;