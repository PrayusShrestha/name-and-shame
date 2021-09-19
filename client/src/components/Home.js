import './Home.css'
import Search from './Header/Search'
import Form from './Review/Form'

function Home() {
    return (
        <div className="Home">
            <div id = "home-top">
                <a href = "/"  id = "home-title">Name And Shame</a>
                <h2 id = "home-caption">A place to expose companies with unethical business practices</h2>
            </div>
            <p class = "home-text">Start by:</p>
            <p class = "home-text">Searching for a company:</p>
            <div id="home-search"><Search/></div>

            {/* <a href="#" onclick="openPopup(); return false;">Writing a Review</a>
                <div id="myPopup">
                <a href="#" id="myExit" onclick="closePopup();return false">x</a>
                Hello There

                </div> */}
            <p class = "home-text">Writing a review</p>
            <Form/>
        </div>
    );
}

export default Home;
