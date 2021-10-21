import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Tabsliderstyle from "./Tabslider.style"
import Moviecard from "./Moviecard"
import Fade from "react-reveal/Fade"
import {onStreamApi} from '../../utils/Config'
function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const Tabslider = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Tabsliderstyle>
      <Box className="box-container">
        <div className="container">
          <Fade top>
          <div className="row">
            <div className="col-left">
              <h3>What's Popular</h3>
            </div>
            <div className="col-right">
              <Box
                sx={{ borderBottom: "none", borderColor: "white" }}
                className="box-header"
              >
                <Tabs
                  className="box-tabs"
                  value={value}
                  TabIndicatorProps={{
                    style: { display: "none" },
                  }}
                  onChange={handleChange}
                >
                  <Tab
                    className="single-tab active"
                    label="Streaming"
                    {...a11yProps(0)}
                  />
                  <Tab className="single-tab" label="On TV" {...a11yProps(1)} />
                  <Tab
                    className="single-tab"
                    label="For Rent"
                    {...a11yProps(2)}
                  />
                  <Tab
                    className="single-tab"
                    label="In Theatres"
                    {...a11yProps(3)}
                  />
                </Tabs>
              </Box>
            </div>
          </div>
          </Fade>
        </div>
        <div className="container-fluid cardslider">
          <TabPanel value={value} index={0}>
            <Moviecard api={onStreamApi} page={"1"}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Moviecard api={onStreamApi} page={"2"}/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Moviecard api={onStreamApi} page={"3"}/>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Moviecard api={onStreamApi} page={"4"}/>
          </TabPanel>
        </div>
      </Box>
    </Tabsliderstyle>
  )
}

export default Tabslider
