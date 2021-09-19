import './Home.css'
import Search from './Header/Search'
import Form from './Review/Form'

function Home(props) {
    return (
        <div className="Home">
            <div id = "home-top">
                <a href = "/"  id = "home-title">Name And Shame</a>
                <h2 id = "home-caption">Expose companies with unethical business practices</h2>
            </div>
            <p className = "home-text">Search for a company</p>
            <div id="home-search"><Search /></div>
            <p class = "home-text" id = "home-write-review">Write a review</p>
            <div id = "home-form"><Form {...props}/></div>
        </div>
    );
}

export default Home;
