import React from "react"
import Topcastcardstyle from "./Topcastcard.style"

const Topcastcard = (props) => {
  return (
    <Topcastcardstyle>
      <div className="card">
        <img src={props.img} alt="topcast" />
        <h4>{props.title}</h4>
        <p>{props.detail}</p>
      </div>
    </Topcastcardstyle>
  )
}

export default Topcastcard
