import styled from "styled-components"
import { device } from "../Mediaquery"

const Headerstyle = styled.div`
  background-color: #032541;
  color: black;
  height: 70px;
  position: relative;
  z-index: 0;
  @media ${device.laptop} {
    height: unset;
  }

  .container {
    .row {
      width: 100%;
      display: flex;
      .col-left {
        width: 60%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: white;
        height: 70px;

        @media ${device.laptop} {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        nav {
          img {
            width: 25%;
            cursor: pointer;
          }
          .navbar {
            margin-top: 15px;

            li {
              margin-right: 15px;
            }
          }
        }
      }
      .col-right {
        width: 40%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: white;
        height: 70px;

        @media ${device.laptop} {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        i,
        button,
        p {
          margin-left: 25px;
        }

        .fa-plus {
          font-size: 22px;
          cursor: pointer;
        }
        .fa-search {
          font-size: 22px;
          color: #02b4e4;
          cursor: pointer;
        }
        button {
          border: 1px solid white;
          background-color: #032541;
          font-size: 14px;
          color: white;
          padding: 3px 5px;
          border-radius: 3px;
          cursor: pointer;
        }
        p {
          margin-top: 15px;
        }
      }
    }
  }
`
export default Headerstyle
