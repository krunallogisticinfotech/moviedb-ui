import React, { useState, useEffect } from "react"
import { ScrollMenu } from "react-horizontal-scrolling-menu"
import Singlecard from "./Singlecard"
import Fade from "react-reveal/Fade"

import axios from "axios"
import { apiKey,movieImage,apiFilter} from "../../utils/Config"

const Moviecard = (props) => {
  const [movieData, setMovieData] = useState([])
  const apiUrl = props.api;
  const apiPage = props.page;
  
  useEffect(() => {
    const loadMovieData = async () => {
      const response = await axios.get(
        `${apiUrl}${apiKey}${apiFilter}${apiPage}`
      )
      setMovieData(response.data?.results)
    }
    loadMovieData();
  }, [])

  //console.log(movieData);
  // const {results} = movieData ;
  //console.log(results[0]);
  //movieData.map((item)=> console.log(item))

  return (
    <div>
      <Fade right>
        <ScrollMenu>
          {
            movieData.map((item)=><Singlecard img={`${movieImage}${item.poster_path}`} heading={item.title} date={item.release_date} />)
          }
          
          {/* <Singlecard img={Cardimage2} heading={"Loki"} date={"09 June 2020"} />
          <Singlecard
            img={Cardimage3}
            heading={"SAS:Red Notice"}
            date={"11 June 2021"}
          />
          <Singlecard
            img={Cardimage4}
            heading={"Lucifer"}
            date={"25 June 2016"}
          />
          <Singlecard
            img={Cardimage5}
            heading={"What IF"}
            date={"11 Augest 2021"}
          />
          <Singlecard
            img={Cardimage6}
            heading={"Mortal Kombat"}
            date={"07 April 2021"}
          />
          <Singlecard
            img={Cardimage7}
            heading={"The Grey"}
            date={"07 April 2021"}
          />
          <Singlecard img={Cardimage2} heading={"Loki"} date={"09 June 2020"} />
          <Singlecard
            img={Cardimage3}
            heading={"SAS:Red Notice"}
            date={"11 June 2021"}
          />
          <Singlecard
            img={Cardimage4}
            heading={"Lucifer"}
            date={"25 June 2016"}
          />
          <Singlecard
            img={Cardimage5}
            heading={"What IF"}
            date={"11 Augest 2021"}
          />
          <Singlecard
            img={Cardimage6}
            heading={"Mortal Kombat"}
            date={"07 April 2021"}
          />
          <Singlecard
            img={Cardimage7}
            heading={"The Grey"}
            date={"07 April 2021"}
          /> */}
        </ScrollMenu>
      </Fade>
    </div>
  )
}

export default Moviecard
