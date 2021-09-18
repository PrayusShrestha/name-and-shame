import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { useHistory } from 'react-router-dom';

function Search() {
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState(null);
    let history = useHistory();

    const handleChange = value => {
        setSelected(value);
        history.push("/company");
    };

    const handleInputChange = value => {
        setQuery(value);
    };

    const loadOptions = (query) => {
        return fetch(process.env.REACT_APP_SERVER_URI + "companies/search/" + query).then(res => res.json());
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
