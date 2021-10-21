import styled from "styled-components"

const Cardstyle = styled.div`
  border: none;
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 25px;
  margin-left: 0px;
  margin-right: 20px;
  width: 160px;
  user-select: none;
  cursor: pointer;
  .singlecard {
    transition: 0.8s;

    &:hover {
      transform: scale(1.05);
      z-index: 10;
      transition: 0.8s;
    }
    .image {
      width: 160px;

      border-radius: 10px;

      z-index: 0;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    h3 {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.3em;
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 10px;
    }
    p {
      margin-top: -5px;
      opacity: 0.8;
      margin-left: 10px;
      font-size: 14px;
    }
  }
`

export default Cardstyle
