import React from "react"
import Cardstyle from "./Singlecard.style"
//import Rate from '../../assets/ratecircle.png'
const Singlecard = (props) => {
  return (
    <Cardstyle role="button" tabIndex={0}>
      <div className="singlecard">
        <img className="image" src={props.img} alt="card" />
        <h3>{props.heading}</h3>
        <p>{props.date}</p>
      </div>
    </Cardstyle>
  )
}

export default Singlecard
