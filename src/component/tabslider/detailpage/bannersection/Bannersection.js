import React from "react"
import Bannersectionstyle from "./Bannersection.style"
import Poster from "../../../../assets/posterdetailpage.jpg"
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted"
import FavoriteIcon from "@mui/icons-material/Favorite"
import BookmarkIcon from "@mui/icons-material/Bookmark"
import StarIcon from "@mui/icons-material/Star"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"

const Bannersection = () => {
  return (
    <Bannersectionstyle>
      <div className="container bannersection">
        <div className="row">
          <div className="col-left">
            <img src={Poster} alt="poster" />
          </div>
          <div className="col-right">
            <div className="main-title">
              <div className="row">
                <h2>
                  Muppets Haunted Mansion <span>(2021)</span>
                </h2>
              </div>
            </div>
            <div className="movie-meta">
              <div className="row">
                <div className="meta-one">
                  <p>PG</p>
                </div>
                <div className="meta-two">
                  <p>08/10/2021</p>
                </div>
                <div className="meta-three">
                  <ul>
                    <li>Comedy, Family, Tv Shows</li>
                    <li>52m</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="user-tools">
              <div className="row">
                <div className="tool-one">
                  <Tooltip title="Add to list">
                    <IconButton>
                      <FormatListBulletedIcon className="tools-icons" />
                    </IconButton>
                  </Tooltip>
                </div>
                <div className="tool-two">
                  <Tooltip title="Mark as favourite">
                    <IconButton>
                      <FavoriteIcon className="tools-icons" />
                    </IconButton>
                  </Tooltip>
                </div>
                <div className="tool-three">
                  <Tooltip title="Add to your watchlist">
                    <IconButton>
                      <BookmarkIcon className="tools-icons" />
                    </IconButton>
                  </Tooltip>
                </div>
                <div className="tool-four">
                  <Tooltip title="Rate It!">
                    <IconButton>
                      <StarIcon className="tools-icons" />
                    </IconButton>
                  </Tooltip>
                </div>
                <div className="tool-five">
                  <i class="fas fa-play"></i>
                  <span>Play Trailer</span>
                </div>
              </div>
            </div>
            <div className="content-detail">
              <h5>Cue the light(ning)!</h5>
              <div className="content-overview">
                <h4>Overview</h4>
                <p>
                  Gonzo is challenged to spend one night in The Haunted Mansion
                  on Halloween night.
                </p>
              </div>
              <div className="content-persons">
                <div className="row">
                  <div className="col-one">
                    <h4>Kirk R. Thatcher</h4>
                    <p>Director, Writer</p>
                  </div>
                  <div className="col-two">
                    <h4>Kelly Younger</h4>
                    <p>Writer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Bannersectionstyle>
  )
}

export default Bannersection
