import Search from './Search';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="Header">
            <h1 id = "site-title">Name And Shame</h1>
            <div id = "search-bar"><Search/></div>
            <Link to="/companies/add">Write a review!</Link>
        </div>
    );
}

export default Header;
