import React from "react"
import { ScrollMenu } from "react-horizontal-scrolling-menu"
import Topcastcard from './Topcastcard'
import Topcast1 from "../../../../assets/topcast1.jpg"
const Topcastslider = () => {
  return (
    <div>
     <ScrollMenu>
        <Topcastcard img={Topcast1} title={"Dave Goelz"} detail={"Gonzo (voice)"}/>
        <Topcastcard img={Topcast1} title={"Dave Goelz"} detail={"Gonzo (voice)"}/>
        <Topcastcard img={Topcast1} title={"Dave Goelz"} detail={"Gonzo (voice)"}/>
        <Topcastcard img={Topcast1} title={"Dave Goelz"} detail={"Gonzo (voice)"}/>
        <Topcastcard img={Topcast1} title={"Dave Goelz"} detail={"Gonzo (voice)"}/>
        <Topcastcard img={Topcast1} title={"Dave Goelz"} detail={"Gonzo (voice)"}/>
        <Topcastcard img={Topcast1} title={"Dave Goelz"} detail={"Gonzo (voice)"}/>
        <Topcastcard img={Topcast1} title={"Dave Goelz"} detail={"Gonzo (voice)"}/>
        <Topcastcard img={Topcast1} title={"Dave Goelz"} detail={"Gonzo (voice)"}/>
        <Topcastcard img={Topcast1} title={"Dave Goelz"} detail={"Gonzo (voice)"}/>
        <Topcastcard img={Topcast1} title={"Dave Goelz"} detail={"Gonzo (voice)"}/>
        <Topcastcard img={Topcast1} title={"Dave Goelz"} detail={"Gonzo (voice)"}/>
            
     </ScrollMenu>
    </div>
  )
}

export default Topcastslider
