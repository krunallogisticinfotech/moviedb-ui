import React, { useState, useEffect } from "react"
import { ScrollMenu } from "react-horizontal-scrolling-menu"
import Singlevideocard from "./Singlevideocard"
import Fade from "react-reveal/Fade"
import axios from "axios"
import { apiKey, movieImage, apiFilter } from "../../../utils/Config"
const Videocard = (props) => {
  const [movieData, setMovieData] = useState([])
  const apiUrl = props.api
  const apiPage = props.page

  useEffect(() => {
    const loadMovieData = async () => {
      const response = await axios.get(
        `${apiUrl}${apiKey}${apiFilter}${apiPage}`
      )
      setMovieData(response.data?.results)
    }
    loadMovieData()
  }, [])

  return (
    <div>
      <Fade right>
        <ScrollMenu>
          {movieData.map((item) => (
            <Singlevideocard
              img={`${movieImage}${item.backdrop_path}`}
              heading={item.title}
              text={item.release_date}
            />
          ))}

          {/* <Singlevideocard
            img={Videocard1}
            heading={"You"}
            text={"YOU Season 4 | Announcement | Netflix"}
          /> */}
        </ScrollMenu>
      </Fade>
    </div>
  )
}

export default Videocard
