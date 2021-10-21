import React from "react"
import Jointodaystyle from "./Jointoday.style"
import Fade from "react-reveal/Fade"
const Jointoday = () => {
  return (
    <Jointodaystyle>
      <div className="container jointoday">
          <Fade top>
        <div className="heading">
          <h2>Join Today</h2>
        </div>
        </Fade>
        <Fade top>
        <div className="row">
          <div className="col-left">
            <p>
              Get access to maintain your own <span>custom personal lists, track what
              you've seen </span>and search and filter for <span>what to watch
              next</span>—regardless if it's in theatres, on TV or available on popular
              streaming services like Netflix, Hotstar, and Amazon Prime Video.
            </p>
            <button>Sign Up</button>
          </div>
          <div className="col-right">
              <ul>
                  <li>Enjoy TMDB ad free</li>
                  <li>Maintain a personal watchlist</li>
                  <li>Filter by your subscribed streaming services and find something to watch</li>
                  <li>Log the movies and TV shows you've seen</li>
                  <li>Build custom lists</li>
                  <li>Contribute to and improve our database</li>
              </ul>
          </div>
        </div>
        </Fade>
      </div>
    </Jointodaystyle>
  )
}

export default Jointoday
