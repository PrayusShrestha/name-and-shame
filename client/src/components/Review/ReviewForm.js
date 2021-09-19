import React from "react";
import Header from '../Header/Header'
import Form from './Form'

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <Header />
            <Form {...this.props}/>
        </div>
        );
    }
}

export default ReviewForm;
