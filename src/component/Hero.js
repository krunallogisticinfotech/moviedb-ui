import React from "react"
import Herostyle from "./Herostyle"
import Fade from "react-reveal/Fade"

const Hero = () => {
  return (
    <Fade>
    <Herostyle>
      <div className="container-fluid hero">
        <Fade left>
        <div className="container">
          <div className="content">
            <h1>
              Welcome
              <br />
              <span>
                Millions of movies, TV shows and people to discover. Explore
                now.
              </span>
            </h1>
          </div>
          <div className="search-form">
            <input
              type="text"
              placeholder="Search for movie,TV Shows & Persons ....."
              name="Search"
            />
            <button>Search</button>
          </div>
        </div>
        </Fade>
      </div>
    </Herostyle>
    </Fade>
  )
}

export default Hero
