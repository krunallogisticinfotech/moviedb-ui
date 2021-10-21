import styled from "styled-components"

const Leaderboardstyle = styled.div`
  background-color: whitesmoke;
  padding: 35px 0px;
  .heading {
    .row {
      width: 100%;
      .col-left {
        width: 18%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 15px;

        h2 {
          font-size: 26px;
          font-weight: 600;
          margin-bottom: -5px;
        }
      }
      .col-right {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;

        p {
          margin-bottom: -3px;
          .dot-one {
            display: inline-block;
            height: 10px;
            width: 10px;
            border-radius: 10px;
            margin-right: 10px;
            line-height: 0.5em;
            background: linear-gradient(
              270deg,
              rgba(39, 215, 171, 1) 27%,
              rgba(186, 253, 206, 1) 100%
            );
          }
          .dot-two {
            display: inline-block;
            height: 10px;
            width: 10px;
            border-radius: 10px;
            margin-right: 10px;
            background: linear-gradient(
              270deg,
              rgba(217, 60, 99, 1) 27%,
              rgba(253, 192, 111, 1) 100%
            );
          }
        }
      }
    }
  }

  .leaders {
    margin-top: 50px;
    .row {
      width: 100%;
        margin-bottom: 10px;
      .col-left {
        width: 50%;
        padding-left: 30px;

        .row-blurb {
          width: 100%;
          display: flex;
          .avatar {
            width: 15%;
            img {
              border-radius: 35px;
            }
          }
          .text {
            width: 85%;
            display: flex;
            flex-direction: column;
            h3{
                font-size: 22px;
                font-weight: 600;
                margin-bottom: -3px;
            }
            .hr-one {
                margin-bottom: -20px;
              p {
                .hr-line {
                  display: inline-block;
                  height: 10px;
                  width: 10%;
                  border-radius: 10px;
                  margin-right: 10px;
                  line-height: 0.5em;
                  background: linear-gradient(
                    270deg,
                    rgba(39, 215, 171, 1) 27%,
                    rgba(186, 253, 206, 1) 100%
                  );
                }
              }
            }
            .hr-two {
              p {
                .hr-line {
                  display: inline-block;
                  height: 10px;
                  width: 80%;
                  border-radius: 10px;
                  margin-right: 10px;
                  line-height: 0.5em;
                  background: linear-gradient(
              270deg,
              rgba(217, 60, 99, 1) 27%,
              rgba(253, 192, 111, 1) 100%
            );
                }
              }
            }
          }
        }
      }
      .col-right {
        width: 50%;
        padding-left: 30px;

        .row-blurb {
          width: 100%;
          display: flex;
          .avatar {
            width: 15%;
            img {
              border-radius: 35px;
            }
          }
          .text {
            width: 85%;
            display: flex;
            flex-direction: column;
            h3{
                font-size: 22px;
                font-weight: 600;
                margin-bottom: -3px;
            }
            .hr-one {
                margin-bottom: -20px;
              p {
                .hr-line {
                  display: inline-block;
                  height: 10px;
                  width: 70%;
                  border-radius: 10px;
                  margin-right: 10px;
                  line-height: 0.5em;
                  background: linear-gradient(
                    270deg,
                    rgba(39, 215, 171, 1) 27%,
                    rgba(186, 253, 206, 1) 100%
                  );
                }
              }
            }
            .hr-two {
              p {
                .hr-line {
                  display: inline-block;
                  height: 10px;
                  width: 30%;
                  border-radius: 10px;
                  margin-right: 10px;
                  line-height: 0.5em;
                  background: linear-gradient(
              270deg,
              rgba(217, 60, 99, 1) 27%,
              rgba(253, 192, 111, 1) 100%
            );
                }
              }
            }
          }
        }
      }
    }
  }
`
export default Leaderboardstyle
