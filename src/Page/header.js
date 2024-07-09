import "./Header.css";

function Main(){
    return(
        <div className="container">
            <header className="header">
                 <div class="nav">
                <ul>
                    <li><a href="#">Login or Create an Account</a></li>
                    <li><a href="#">Cart: 0 Items</a></li>
                </ul>
            </div>
            <div class="search-container">
            <input type="text" placeholder="Search..."/>
    </div>
            </header>
        </div>

    )
}

export default Main;