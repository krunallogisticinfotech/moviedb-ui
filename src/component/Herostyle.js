import styled from "styled-components"
import { device } from "../Mediaquery"
import Background from "../assets/hero-image.jpg"
const Herostyle = styled.div`
  .hero {
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover !important;
    height: 350px;
    display: flex;
    background: linear-gradient(
        90deg,
        rgb(0 0 0 / 59%) 0%,
        rgb(0 0 0 / 37%) 62%
      ),
      url(${Background});

    .container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      @media ${device.laptop} {
        padding: 0px 50px;
      }
      @media ${device.mobile} {
        padding: 50px 30px;
      }

      .content {
        color: white;
        h1 {
          font-size: 48px;
          font-weight: 600;
          line-height: 1em;

          @media ${device.tablet} {
            font-size: 42px;
          }
          @media ${device.mobile} {
            font-size: 36px;
            text-align: center;
          }

          span {
            font-size: 32px;
            line-height: 1.2em;
            font-weight: 400;
            @media ${device.tablet} {
              font-size: 28px;
            }
            @media ${device.mobile} {
              font-size: 24px;
              text-align: center;
            }
          }
        }
      }

      .search-form {
        display: block;
        width: 100%;
        margin-top: 35px;

        @media ${device.mobile} {
          display: flex;
          flex-direction: column;
        }

        input {
          width: 93%;
          height: 45px;
          padding-left: 30px;
          border-radius: 25px;
          border: none;

          @media ${device.laptop} {
            width: 85%;
          }
          @media ${device.mobile} {
            width: 100%;
            padding-left: 30px;
            padding-right: 30px;
          }
        }
        button {
          height: 45px;
          padding: 10px 26px;
          border: none;
          margin-left: -50px;

          @media ${device.mobile} {
            text-align: center;
            margin-left: 0px;
            margin-top: 10px;
          }

          background: linear-gradient(
            90deg,
            #1dd3ac,
            #00d0b8,
            #00ccc3,
            #00c9cd,
            #00c4d5,
            #00bfdb,
            #00badf,
            #00b5e1
          );
          border-radius: 25px;
          color: white;
          cursor: pointer;
          transition: 0.5s;
          &:hover {
            background: linear-gradient(
              90deg,
              #00b5e1,
              #00badf,
              #00bfdb,
              #00c4d5,
              #00c9cd,
              #00ccc3,
              #00d0b8,
              #1dd3ac
            );
            transition: 0.5s;
          }
        }
      }
    }
  }
`

export default Herostyle
