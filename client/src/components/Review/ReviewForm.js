import React from "react";
import { useHistory } from 'react-router-dom';
import AsyncSelect from 'react-select/async';
import AsyncCreatable from 'react-select';
import { loadCompanies, loadTags } from '../../utils/SearchUtils';
import { renderTags } from "../../utils/renderUtils";
import "./ReviewForm.css";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: '',
            industry: '',
            companyExists: false,
            submissionFailure: false,
            reviewTitle: '',
            reviewDescription: '',
            tags: [],
            trashiness: 0,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleIndustryChange = this.handleIndustryChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTagsChange = this.handleTagsChange.bind(this);
        this.handleTrashinessChange = this.handleTrashinessChange.bind(this);
    }

    handleIndustryChange(event) {
        this.setState({industry: event.target.value});
    }

    handleTitleChange(event) {
        this.setState({reviewTitle: event.target.value});
    }

    handleDescriptionChange(event) {
        this.setState({reviewDescription: event.target.value});
    }

    handleTagsChange(tagName) {
        let tags = this.state.tags;
        let tagAlreadySelected = false;

        for (let i = 0; i < tags.length; i++) {
            if (tags[i] === tagName) {
                tags.splice(i, 1);
                tagAlreadySelected = true;
                break;
            }
        }

        if (!tagAlreadySelected) {
            tags.push(tagName);
        }

        this.setState({tags: tags});
    }

    handleNameChange(name) {
        this.setState({companyName: name});
        fetch(process.env.REACT_APP_SERVER_URI + "/companies/" + name)
            .then(res => {
                if (res.ok) {
                    this.setState({
                        industry: res.industry,
                        companyExists: true
                    });
                }
            });
    }

    handleTrashinessChange(event) {
        this.setState({trashiness: event.target.value});
    }

    submitCompany() {
        const response = fetch(process.env.REACT_APP_SERVER_URI + "/companies", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: {
                'name': this.state.companyName,
                'industry': this.state.industry
            }
        });

        return response;
    }

    submitReview(companyName) {
        let timestamp = new Date().valueOf();
        
        const response = fetch(process.env.REACT_APP_SERVER_URI + "/companies/" + companyName, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: {
                title: this.state.reviewTitle,
                description: this.state.reviewDescription,
                timestamp: timestamp,
                tags: this.state.tags,
                trashiness: this.state.trashiness
            }
        });

        return response;
    }

    handleSubmit(event) {
        // validate inputs first

        const responseCompany = this.submitCompany();

        if (responseCompany !== 200) {
            this.setState({submissionFailure: true});
        }
        

        this.history.push("/companies/" + this.state.companyName);
    }

    render() {
        let errorMsg;
        if (this.state.submissionFailure) errorMsg = <span>An error occured! Please make sure you've filled in all inputs correctly.</span>
        
        let companyInput = (
            <AsyncSelect
                onChange={this.handleNameChange}
                loadOptions={loadCompanies}
                value={this.state.companyName}
                getOptionLabel={e => e.name}
                getOptionValue={e => e.name}
            />
        );

        let tagInput = (
            <AsyncCreatable
                onChange={this.handleTagsChange}
                loadOptions={loadTags}
            />
        );

        let tags = renderTags(this.state.tags);

        return (
            <form id="review-form" onSubmit={this.handleSubmit}>
                {errorMsg}
                <label>Company Name</label>
                {companyInput}
                <label>Industry</label>
                <br />
                <input type="text"
                    value={this.state.industry}
                    disabled={this.state.companyExists}
                    onChange={this.handleIndustryChange}/>
                <br />
                <label>Review Title</label>
                <br />
                <input type="text" 
                    value={this.state.reviewTitle}/>
                <br />
                <label>Trashiness</label>
                <br />
                <input type="number"
                    value={this.state.trashiness}
                    onChange={this.handleTrashinessChange}
                    min="0"
                    max="5"/>
                <label>Tags</label>
                {tags}
                {tagInput}
                <br />
                <label>Description</label>
                <br />
                <input type="text" 
                    value={this.state.reviewDescription}/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default ReviewForm;
