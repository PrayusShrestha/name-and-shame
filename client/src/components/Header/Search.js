import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

function Search() {
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState(null);

    const handleChange = value => {
        setSelected(value);
    };

    const handleInputChange = value => {
        setQuery(value);
    };

    const loadOptions = (query) => {
        console.log(fetch("http://localhost:3000/companies/search/" + query).then(res => res.json()));
        return fetch("http://localhost:3000/companies/search/" + query).then(res => res.json());
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
