import React from "react";
import AsyncCreatableSelect from 'react-select/async-creatable';
import { loadCompanies, loadTags } from '../../utils/SearchUtils';
import "./Form.css";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            company: null,
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
        this.searchTags = this.searchTags.bind(this);
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

    handleTagsChange(tag) {
        let newTags = [];
        for (let el of tag) {
            if (!el.value) {
                let newTag = {label: el};
                newTags.push(newTag);
            } else {
                newTags.push(el);
            }
        }
        this.setState({tags: newTags});
    }

    handleNameChange(company) {
        if (company.value) {
            company = {name: company.value};
        }
        this.setState({company: company});
        
        if (company.name) {
            fetch(process.env.REACT_APP_SERVER_URI + "/companies/" + company.name)
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    if (res.name) {
                        this.setState({
                            industry: res.industry,
                            companyExists: true
                        });
                    }
                });
        }
    }

    handleTrashinessChange(event) {
        this.setState({trashiness: event.target.value});
    }

    searchTags(tag) {
        return loadTags(this.state.company.name, tag);
    }

    async submitCompany() {
        let responseCode;
        const response = await fetch(process.env.REACT_APP_SERVER_URI + "/companies", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'name': this.state.company.name,
                'industry': this.state.industry
            })
        });

        return response.json();
    }

    async submitReview() {
        let timestamp = new Date().valueOf();
        let responseCode;
        
        const response = await fetch(process.env.REACT_APP_SERVER_URI + "/companies/" + this.state.company.name, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.reviewTitle,
                description: this.state.reviewDescription,
                timestamp: parseInt(timestamp),
                tags: this.state.tags.map((tag, index) => {
                    return tag.label;
                }),
                trashiness: parseInt(this.state.trashiness)
            })
        });

        return response.json();
    }

    async handleSubmit(event) {
        // validate inputs first
        event.preventDefault();

        const responseCompany = await this.submitCompany();

        const responseReview = await this.submitReview();
        const responseReviewCode = responseReview.msg[0];
        //for(let i = 0; i < 999999; i++);
        if (responseReviewCode != 200) {
            this.setState({submissionFailure: true});
            return;
        }
        this.props.history.push({
            pathname: "/companies/" + this.state.company.name});
    }

    render() {
        let errorMsg;
        if (this.state.submissionFailure) errorMsg = <span>An error occured! Please make sure you've filled in all inputs correctly.</span>
        
        let companyInput = (
            <AsyncCreatableSelect
                onChange={this.handleNameChange}
                loadOptions={loadCompanies}
                value={this.state.company}
                getOptionLabel={e => {
                    if (e.name) {
                        return e.name;
                    } else {
                        return e.label;
                    }
                }}
                getOptionValue={e => {
                    if (e.name) {
                        return e.name;
                    } else {
                        return e.value;
                    }
                }}
            />
        );

        let tagInput = (
            <AsyncCreatableSelect
                onChange={this.handleTagsChange}
                isMulti
            />
        );
        if (this.state.companyExists) {
            tagInput = (
                <AsyncCreatableSelect
                    onChange={this.handleTagsChange}
                    loadOptions={this.searchTags}
                    getOptionLabel={e => {
                        if (e.label) {
                            return e.label;
                        } else {
                            console.log(e);
                            return e;
                        }
                    }}
                    getOptionValue={e => {
                        if (e.label) {
                            return e.label;
                        } else {
                            console.log(e);
                            return e;
                        }
                    }}
                    isMulti
                />
            );
        }

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
                    value={this.state.reviewTitle}
                    onChange={this.handleTitleChange}/>
                <label>Trashiness (0-5)</label>
                <br />
                <input type="number"
                    value={this.state.trashiness}
                    onChange={this.handleTrashinessChange}
                    min="0"
                    max="5"/>
                <label>Tags</label>
                {tagInput}
                <br />
                <label>Description</label>
                <br />
                <input type="text" 
                    value={this.state.reviewDescription}
                    onChange={this.handleDescriptionChange}/>
                <input type="submit" value="Submit" id = "submit-butt"/>
            </form>
        );
    }
}

export default Form;
