import styled from "styled-components"
import { device } from "../../Mediaquery"
import Background from "../../assets/trending.png"
const Tabsliderthirdstyle = styled.div`
  margin-top: -24px;
  padding-top: 30px;
  padding-left: 50px;
  position: relative;
  z-index: 0;
  position: relative;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover !important;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.26934523809523814) 27%,
      rgba(255, 255, 255, 1) 100%
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
          color: black;
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
            border: 2px solid #032541;
            border-radius: 35px;

            .single-tab {
              border-radius: 35px;
              border-bottom: none !important;
              color: #032541;
              font-size: 14px;
              text-transform: none !important;
              padding: 0px 12px !important;
              min-height: 45px !important;

              @media ${device.tablet} {
                padding: 0px 10px;
                font-size: 12px;
              }
              &:focus {
                background-color: #032541;
                color: white;
                outline: unset !important;
              }
              &:active {
                background-color: #032541;
              }
            }
          }
        }
      }
    }
  }
`

export default Tabsliderthirdstyle
