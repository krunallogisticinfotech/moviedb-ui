import styled from "styled-components"
import Background from "../../../../assets/detailbackground.jpg"
const Bannersectionstyle = styled.div`
  margin-top: 45px;
  padding: 35px 0px;
  background: linear-gradient(
      270deg,
      rgba(4, 38, 66, 0.7833508403361344) 0%,
      rgba(4, 38, 66, 1) 100%
    ),
    url(${Background});
  background-position: center;
  background-size: cover;

  .bannersection {
    .row {
      width: 100%;

      .col-left {
        width: 30%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
          border-radius: 8px;
        }
      }
      .col-right {
        width: 70%;
        color: white;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        .main-title {
          width: 100%;
          margin-left:15px;
          .row{
            width: 100%;
            h2 {
            font-size: 36px;
            font-weight: 600;
            span {
              font-weight: 300;
            }
          }
          }
          
        }
        .movie-meta {
          width: 100%;
          margin-left: 15px;
          .row {
            width: 100%;
            .meta-one {
              width: 4%;
              p{
                border: 1px solid white;
                padding: 0px 5px;
                opacity: 0.8;
              }
            }
            .meta-two {
              width: 14%;
              margin-left: 15px;
              p{
                opacity: 0.8;
              }
            }
            .meta-three {
              width: 50%;
              ul{
                display: inline-flex;
                li{
                  margin-right: 30px;
                  opacity: 0.8;
                }
              }
            }
          }
        }
        .user-tools{
          width: 100%;
          margin-left: 05px;
          margin-top: -5px;
          .row{
            width: 100%;

            .tool-one{
              width: 8%;
              .tools-icons{
                color: white;
                background-color: #01111e;
                border:15px solid #01111e;
                border-radius: 35px;
                font-size: 50px;
              }
            }
            .tool-two{
              width:8%;
              .tools-icons{
                color: white;
                background-color: #01111e;
                border:15px solid #01111e;
                border-radius: 35px;
                font-size: 50px;
              }
            }
            .tool-three{
              width: 8%;
              .tools-icons{
                color: white;
                background-color: #01111e;
                border:15px solid #01111e;
                border-radius: 35px;
                font-size: 50px;
              }
            }
            .tool-four{
              width: 8%;
              .tools-icons{
                color: white;
                background-color: #01111e;
                border:15px solid #01111e;
                border-radius: 35px;
                font-size: 50px;
              }
            }
            .tool-five{
              width: 35%;
              padding-left: 20px;
              margin:auto 0;
              cursor: pointer;
              i{
                margin-right: 10px;
              }
            }
          }
        }
        .content-detail{
          width: 100%;
          margin-top: 10px;
          h5{
            font-size: 18px;
            font-style:italic;
            font-weight: 200;
            margin-bottom: 20px;
          }
          .content-overview{
            h4{
              font-size: 24px;
              margin-bottom: 5px;
            }
            p{
              font-size: 18px;
              opacity: 0.8;
              font-weight:200;
            }
          }
          .content-persons{
            width: 100%;
            margin-left: 15px;
            .row{
              width: 100%;
              .col-one{
                width: 50%;
                h4{
                  font-size: 18px;
                  font-weight:600;
                  margin-bottom: 2px;
                }
                p{
                  font-size:16px;
                  font-weight:400;
                  opacity: 0.8;
                }
              }
              .col-two{
                width: 50%;
                h4{
                  font-size: 18px;
                  font-weight:600;
                  margin-bottom: 2px;
                }
                p{
                  font-size:16px;
                  font-weight:400;
                  opacity: 0.8;
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Bannersectionstyle
