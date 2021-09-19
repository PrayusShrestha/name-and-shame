import React from 'react';
import Review from './Review/Review';
import Header from './Header/Header';
import './Company.css';

import { renderTags, renderTrashCans, renderReviews } from '../utils/renderUtils';
import Error from './Error';

class Company extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.match.params.name;

        this.state = {
            companyExists: true,
            industry: '',
            reviews: [],
            tags: [],
            errorMsg: ''
        };
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_SERVER_URI + '/companies/' + this.name)
            .then(res => res.json())
            .then(res => 
                {
                    if (parseInt(res.status) != 404) {
                        this.setState({
                            companyExists: true,
                            industry: res.industry,
                            reviews: res.reviews,
                            tags: res.tags
                        })
                    } else {
                        this.setState({companyExists: false, errorMsg: res.message});
                    }
            });
    }

    getAverageTrashiness(reviews) {
        let count = 0;
        let trashinessSum = 0.0;

        for (let i in reviews) {
            count++;
            trashinessSum += parseInt(reviews[i].trashiness);
        }

        if (count === 0) return "No reviews";

        let avg = Math.round(trashinessSum / count);
        return renderTrashCans(avg);
    }

    render() {
        if (!this.state.companyExists) {
            return (
                <div>
                    <Header />
                    <Error msg={this.state.errorMsg}/>
                </div>
            );
        }

        let tags = renderTags(this.state.tags);
        let reviews = renderReviews(this.state.reviews);
        let avgTrashiness = this.getAverageTrashiness(this.state.reviews);

        return (
            <div className="Company-whole">
                <Header />
                <div className = "Company">
                    <div id = "company-header">
                        <h1 id = "company-name">{this.name}</h1>
                        <div id = "company-industry"><span>{this.state.industry}</span></div>
                        
                        <h3 id = "avg-trash-title">Average Trashiness</h3>

                    <div id = "avg-trash-center">
                        <span id = "avg-trash">{avgTrashiness}</span>
                    </div>

                    <div className="company-tags all-tags">
                        {tags}
                    </div></div>

                    <div className="company-reviews">
                        {reviews}
                    </div>
                    </div>
            </div>
        );
    }
}

export default Company;