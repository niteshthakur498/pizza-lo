import React from 'react';
import {Link} from 'react-router-dom'

let Home = () => {
    return(
        <div className="homeContent">
            <div className="container">
                <div className="homeContainer">
                    <div className="home">
                        <div>Pizza Lo</div>
                        <div className="homeButton"><Link to="/placeorders">Place Orders</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;