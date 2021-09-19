import { useHistory } from 'react-router-dom';
import CompanySearch from '../CompanySearch';

function Search() {
    let history = useHistory();

    const handleChange = value => {
        history.push("/companies/" + value.name);
    };

    return (
        <div className="Search">
            <CompanySearch handleInputChangeExtra={handleChange}/>
        </div>
    );
}

export default Search;
