import Search from './Search';
import './Header.css';

function Header() {
    return (
        <div className="Header">
            <h1 id = "site-title">Name And Shame</h1>
            <div id = "search-bar"><Search/></div>
        </div>
    );
}

export default Header;
