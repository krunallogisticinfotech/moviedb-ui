import React from "react"
import Header from "./component/Header"
// import Hero from "./component/Hero"
// import Tabs from "./component/tabslider/Tabslider"
// import Tabslidersecond from "./component/tabslider/Tabslidersecond"
// import Videoslider from "./component/tabslider/videocardslider/Videoslider.js"
// import Tabsliderthird from "./component/tabslider/Tabsliderthird"
// import Jointoday from "./component/Jointoday"
// import Leaderboard from "./component/Leaderboard"
import Footer from "./component/Footer"
import Detailpage from "./component/tabslider/detailpage/Detailpage"
const App = () => {
  return (
    <>
      <Header />
      {/* <Hero />
      <Tabs />
      <Tabslidersecond />
      <Videoslider />
      <Tabsliderthird />
      <Jointoday />
      <Leaderboard /> */}
      <Detailpage />
      <Footer />
    </>
  )
}

export default App
