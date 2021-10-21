import styled from 'styled-components'
import Background from '../assets/jointodaybg.jpg'
import {device} from '../Mediaquery'

const Jointodaystyle = styled.div`
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover ;
    background-image: url(${Background});
    z-index:10px;
    margin-top: -24px;
    padding: 35px 0px;

    .heading{
        font-size: 32px;
        font-weight: 600;
        color:white;
        line-height: 1.2em;
    }
    .row{
        width: 100%;

        @media ${device.mobile}{
            width:100%;
            display:flex;
            flex-direction: column-reverse;
        }

        .col-left{
            width: 65%;
            color: white;
            padding-left:15px;
            padding-right: 60px;

            @media ${device.mobile}{
                width: 100%;
                padding-left: 20px;
            }

            p{
                font-weight: 300;
                font-size: 18px;

                span{
                    font-style:italic;
                    opacity: 0.8;
                }
            }
            button{
                background-color: #805be6;
                color:white;
                font-size: 18px;
                padding:8px 20px;
                border:none;
                border-radius: 5px;
                cursor: pointer;
                transition: 0.8s;
                &:focus {
                    outline: unset;
                }
                &:hover{
                    background-color: #8a6ae2;
                    transition: 0.8s;
                }
            }
        }
        .col-right{
            width: 35%;
            color:white;

            @media ${device.mobile}{
                width:100%;
                padding-left: 35px;
                margin-top: 10px;
            }

            ul{
                li{
                    font-weight: 300;
                    font-size: 16px;
                }
            }
        }
    }
`
export default Jointodaystyle;

