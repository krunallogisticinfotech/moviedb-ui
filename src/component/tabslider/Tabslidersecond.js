import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Tabsliderstyle from "./Tabslidersecond.style"
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

const Tabslidersecond = () => {
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
              <h3>Free to watch</h3>
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
                    className="single-tab"
                    label="Movie"
                    {...a11yProps(0)}
                  />
                  <Tab className="single-tab" label="TV" {...a11yProps(1)} />
                  
                </Tabs>
              </Box>
            </div>
          </div>
          </Fade>
        </div>
        <div className="container-fluid cardslider">
          <TabPanel value={value} index={0}>
          <Moviecard api={onStreamApi} page={"5"}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
          <Moviecard api={onStreamApi} page={"6"}/>
          </TabPanel>
          
        </div>
      </Box>
    </Tabsliderstyle>
  )
}

export default Tabslidersecond
