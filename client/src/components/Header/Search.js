import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { useHistory } from 'react-router-dom';
import { loadCompanies } from '../../utils/CompanySearchUtil';

function Search() {
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState(null);
    let history = useHistory();

    const handleChange = value => {
        setSelected(value);
        history.push("/companies/" + value.name);
    };

    const handleInputChange = value => {
        setQuery(value);
    };

    const loadOptions = (query) => {
        return loadCompanies(query);
    };

    return (
        <div className="Search">
            <AsyncSelect
                onInputChange={handleInputChange}
                onChange={handleChange}
                loadOptions={loadOptions}
                value={selected}
                getOptionLabel={e => e.name}
                getOptionValue={e => e.name}
            />
        </div>
    );
}

export default Search;
