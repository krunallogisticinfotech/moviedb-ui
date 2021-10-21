import React from "react"
import Socialsectionstyle from "./Socialsection.style"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

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

const Socialsection = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Socialsectionstyle>
      <Box sx={{ width: "100%" }}>
        <div className="social-tabs">
         <h2>Social </h2>   
        <Box className="tab-box" sx={{ borderBottom: 0, borderColor:"black" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="social tabs"
          >
            <Tab label="Reviews" {...a11yProps(0)} />
            <Tab label="Discussions" {...a11yProps(1)} />
            
          </Tabs>
        </Box>
        </div>  
        <TabPanel className="tabpanals" value={value} index={0}>
          Reviews
        </TabPanel>
        <TabPanel className="tabpanals" value={value} index={1}>
          Discussions
        </TabPanel>
      </Box>
    </Socialsectionstyle>
  )
}

export default Socialsection
