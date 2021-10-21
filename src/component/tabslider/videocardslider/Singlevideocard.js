import React from "react"
import Cardstyle from "./Singlevideocard.style"
import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import { Player ,BigPlayButton} from "video-react"
const Singlevideocard = (props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 720,
    height:440,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  }

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Cardstyle role="button" tabIndex={0}>
      <div className="videocard">
        <img className="thumbnail" src={props.img} alt="videocard" />
        <i className="fas fa-play" onClick={handleOpen}></i>
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Player autoPlay src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
            <BigPlayButton position="center" />
          </Player>
        </Box>
      </Modal>
    </Cardstyle>
  )
}

export default Singlevideocard
