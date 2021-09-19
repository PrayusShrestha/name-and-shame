import React from 'react';
import Header from './Header/Header';
import Review from './Review/Review';
import Tag from './Review/Tag';

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

    renderTags(tags) {
        if (tags.length > 0) {
            return tags.map((tag, index) => (
                <Tag key={index}
                    name={tag.name}
                    count={tag.count}
                />
            ));
        } else {
            return;
        }
    }

    render() {
        let tags = this.renderTags(this.state.tags);
        let reviews = this.renderReviews(this.state.reviews);

        return (
            <div className="Company">
                <h1>{this.name}</h1>
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
