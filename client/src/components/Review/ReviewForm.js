import React from "react";
import { useHistory } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            industry: '',
            submissionFailure: false
        };
        this.history = useHistory();

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleIndustryChange(event) {
        this.setState({industry: event.target.value});
    }

    handleSubmit(event) {
        const response = await fetch(process.env.REACT_APP_SERVER_URI + "/companies", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: {
                'name': this.state.name,
                'industry': this.state.industry
            }
        });

        if (response == 200) {
            this.history.push("/companies/" + this.state.name);
        } else {
            this.setState({submissionFailure: true});
        }
    }

    render() {
        let errorMsg;
        if (this.state.submissionFailure) errorMsg = <span>An error occured! Please make sure you've filled in all inputs correctly.</span>
        return (
            <form onSubmit={this.handleSubmit}>
                {errorMsg}
                <label>Company Name</label>
                <input type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}/>
                <label>Industry</label>
                <input type="text"
                    value={this.state.industry}
                    onChange={this.handleIndustryChange}/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default ReviewForm;
