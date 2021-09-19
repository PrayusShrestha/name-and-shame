import Search from './Search';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="Header">
            <a href = "/" id = "site-title"><h1>Name And Shame</h1></a>
            <div id = "search-bar"><Search/></div>
            <Link to="/companies/add">Write a review!</Link>
        </div>
    );
}

export default Header;
