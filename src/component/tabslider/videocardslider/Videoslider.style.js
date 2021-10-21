import styled from "styled-components"
import { device } from "../../../Mediaquery"
import Background from "../../../assets/videocardbg.jpg"
const Videoslider = styled.div`
  margin-top: -24px;
  padding-top: 30px;
  padding-left: 50px;
  z-index: 0;
  background-color: aqua;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover !important;
  background: linear-gradient(
      90deg,
      rgba(3, 37, 65, 0.9472163865546218) 0%,
      rgba(3, 37, 65, 0.8183648459383753) 100%
    ),
    url(${Background});

  @media ${device.tablet} {
    padding-left: 0px;
  }

  .box-container {
    .row {
      width: 100%;
      .col-left {
        width: 20%;
        margin-left: 5px;

        @media ${device.laptop} {
          width: 30%;
        }
        @media ${device.tablet} {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 0px;
          padding-bottom: 10px;
        }

        h3 {
          color: white;
          font-weight: 400;
          font-size: 28px;
          line-height: 1.2em;
          margin-top: 10px;

          @media ${device.laptop} {
            font-size: 24px;
            margin-left: 30px;
          }
        }
      }
      .col-right {
        width: auto;
        @media ${device.tablet} {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 30px;
        }
        .box-header {
          .box-tabs {
            border: 2px solid #72ebbd;
            border-radius: 35px;

            .single-tab {
              border-radius: 35px;
              border-bottom: none !important;
              color: white;
              font-size: 14px;
              text-transform: none !important;
              padding: 0px 12px !important;
              min-height: 45px !important;

              @media ${device.tablet} {
                padding: 0px 10px;
              }
              &:focus {
                background-color: #72ebbd;
                color: #032541;
                font-weight: 400;
                outline: unset !important;
              }
              &:active {
                background-color: #72ebbd;
              }
            }
          }
        }
      }
    }
  }
`

export default Videoslider
