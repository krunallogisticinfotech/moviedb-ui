import React from "react"
import Topcastsectionstyle from "./Topcastsection.style"
import Topcastslider from "./Topcastslider"
const Topcastsection = () => {
  return (
    <Topcastsectionstyle>
      <div className="heading">
        <h2>Top Billed Cast</h2>
        <Topcastslider />
        <h3>Full Cast & Crew</h3>
        <hr />
      </div>
    </Topcastsectionstyle>
  )
}

export default Topcastsection
