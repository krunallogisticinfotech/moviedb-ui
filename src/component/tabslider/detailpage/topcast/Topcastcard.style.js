import styled from "styled-components"

const Topcastcardstyle = styled.div`
  
  margin-right: 15px;
  margin-top: 20px;
  margin-bottom: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  .card {
      border-radius: 5px;
      border:none;
    img {
      width: auto;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    h4{
        font-size: 16px;
        font-weight: 600;
        padding-top: 15px;
        padding-left: 12px;
        padding-right: 10px;
    }
    p{  
        margin-top: -6px;
        padding-left: 12px;
        padding-right: 10px;
        font-size:14px;
    }
  }
`
export default Topcastcardstyle
