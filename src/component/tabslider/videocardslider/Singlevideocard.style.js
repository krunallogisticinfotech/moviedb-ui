import styled from "styled-components"
const Cardstyle = styled.div`
  border: none;
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 25px;
  margin-left: 0px;
  margin-right: 20px;
  width: 320px;
  user-select: none;
  cursor: pointer;

  .videocard {
      position: relative;
      transition: 0.8s;
      &:hover{
          transform:scale(1.05);
          z-index:10;
          transition:0.8s;
      }

    .thumbnail{
        width:100%;
        border-radius: 10px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        
    }
    .fa-play{
        color:white;
        font-size: 52px;
        position: absolute;
        top:25%;
        left:45%;
    }
    h3{
        font-size:20px;
        font-weight:400;
        color:white;
        line-height: 1.2em;
        text-align: center;
        margin-top: 15px;
        padding:0px 15px;
    }
    p{
        padding:0px 20px;
        font-size:16px;
        color:white;
        line-height: 1.8em;
        text-align: center;
    }

  }
`

export default Cardstyle
