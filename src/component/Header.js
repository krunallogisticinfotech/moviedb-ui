import React from "react"
import Headerstyle from "./Headerstyle"
import Logo from "../assets/logo.png"
import Fade from "react-reveal/Fade"
const Header = () => {
  return (
    <Fade top>
      <Headerstyle>
        <div className="container header">
          <div className="row">
            <div className="col-left">
              <nav className="navbar navbar-expand-lg">
                <img src={Logo} alt="logo" className="navbar-brand" />
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse navbar"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                      <p
                        className="nav-link"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Movies
                      </p>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <p className="dropdown-item" href="#">
                          Action
                        </p>
                        <p className="dropdown-item" href="#">
                          Another action
                        </p>
                        <div className="dropdown-divider"></div>
                        <p className="dropdown-item" href="#">
                          Something else here
                        </p>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <p
                        className="nav-link"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        TV Shows
                      </p>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <p className="dropdown-item" href="#">
                          Action
                        </p>
                        <p className="dropdown-item" href="#">
                          Another action
                        </p>
                        <div className="dropdown-divider"></div>
                        <p className="dropdown-item" href="#">
                          Something else here
                        </p>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <p
                        className="nav-link "
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        People
                      </p>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <p className="dropdown-item" href="#">
                          Action
                        </p>
                        <p className="dropdown-item" href="#">
                          Another action
                        </p>
                        <div className="dropdown-divider"></div>
                        <p className="dropdown-item" href="#">
                          Something else here
                        </p>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <p
                        className="nav-link "
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        More
                      </p>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <p className="dropdown-item" href="#">
                          Action
                        </p>
                        <p className="dropdown-item" href="#">
                          Another action
                        </p>
                        <div className="dropdown-divider"></div>
                        <p className="dropdown-item" href="#">
                          Something else here
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-right">
              <i class="fas fa-plus"></i>
              <button>EN</button>
              <p>Login</p>
              <p>Join TMDB</p>
              <i class="fas fa-search"></i>
            </div>
          </div>
        </div>
      </Headerstyle>
    </Fade>
  )
}

export default Header
