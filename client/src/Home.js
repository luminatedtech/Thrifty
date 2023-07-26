import React from "react";
import { Link } from "react-router-dom";

function Home () {
    return (
        <div className="homeContainer">
        <p className="homeHeader">Your Platform for Your Fashion Needs</p>
        

        <p className="statement">Buy, sell, and discover fasionable clothes cheap</p>
        <div className="gifContainer">
        <iframe
          title="GIF Background"
          src="https://giphy.com/embed/efymon4XkFtYUAjUM0"
          width="100%"
          height="100%"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
            <div className="buttonContainer">
            <Link to='/mensListing'>
            <button className="listingButton">Mensware</button>
            </Link>
            <Link to='/womensListing'>
            <button className="listingButton">Womensware</button>
            </Link>
            </div>
            
        </div>
    )
}

export default Home