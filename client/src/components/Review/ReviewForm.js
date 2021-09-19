import React from "react";
import AsyncSelect from 'react-select/async';
import AsyncCreatable from 'react-select';
import { loadCompanies, loadTags } from '../../utils/SearchUtils';
import { renderTags } from "../../utils/renderUtils";
import Header from '../Header/Header'
import Form from './Form'

class ReviewForm extends React.Component {
    render() {
        return (
        <div>
            <Header />
            <Form />
        </div>
        );
    }
}

export default ReviewForm;
