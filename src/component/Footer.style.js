import styled from 'styled-components'

const Footerstyle = styled.div`
    background-color: #032541;
    padding:50px 0px;
    .container{
        .row{
            width: 100%;

            .col-one{
                width:30%;
                display:flex;
                justify-content: flex-start;
                align-items:center;
                flex-direction: column;
                img{
                    width: 40%;
                    height: auto;
                    margin-bottom: 30px;
                }
                button{
                    color:#02b4e4;
                    background-color: white;
                    border:none;
                    border-radius:5px;
                    text-transform:uppercase;
                    font-size: 20px;
                    padding:5px 15px;
                    cursor: pointer;
                }
            }
            .col-two{
                width:15%;
                color:white;
                h3{
                    font-size:22px;
                    font-weight:600;
                    text-transform: uppercase;
                }
                p{
                    margin-bottom: 2px;
                    font-weight: 200;
                    cursor: pointer;
                }
            }
            .col-three{
                width:15%;
                color:white;
                h3{
                    font-size:22px;
                    font-weight:600;
                    text-transform: uppercase;
                }
                p{
                    margin-bottom: 2px;
                    font-weight: 200;
                    cursor: pointer;
                }
            }
            .col-four{
                width:15%;
                color:white;
                h3{
                    font-size:22px;
                    font-weight:600;
                    text-transform: uppercase;
                }
                p{
                    margin-bottom: 2px;
                    font-weight: 200;
                    cursor: pointer;
                }
            }
            .col-five{
                width:15%;
                color:white;
                h3{
                    font-size:22px;
                    font-weight:600;
                    text-transform: uppercase;
                }
                p{
                    margin-bottom: 2px;
                    font-weight: 200;
                    cursor: pointer;
                }
            }
        }
    }

`

export default Footerstyle