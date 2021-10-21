import React from "react"
import Footerstyle from "./Footer.style"
import Logo from "../assets/footerlogo.png"

class Footer extends React.Component {
  render() {
    return (
      <Footerstyle>
        <div className="container">
          <div className="row">
            <div className="col-one">
              <img src={Logo} alt="logo" />
              <button>Join the community</button>
            </div>
            <div className="col-two">
              <h3>The Basics</h3>
              <p>About TMDB</p>
              <p>Contact Us</p>
              <p>Support Forums</p>
              <p>API</p>
              <p>System Status</p>
            </div>
            <div className="col-three">
              <h3>Get Involved</h3>
              <p>Contribution Bible</p>
              <p>3rd Party Application</p>
              <p>Add New Movies</p>
              <p>Add New Tv Shows</p>
            </div>
            <div className="col-four">
              <h3>Community</h3>
              <p>Guidelines</p>
              <p>Discussions</p>
              <p>Leaderboard</p>
              <p>Twitter</p>
            </div>
            <div className="col-five">
              <h3>Legal</h3>
              <p>Terms of Use</p>
              <p>API Terms of user</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </Footerstyle>
    )
  }
}

export default Footer
