import styled from "styled-components";

export const ButtonHero = styled.button`
background: #17A4D0;
border-radius: 100px;
width: 200px;
height: 60px;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #FFFFFF;
margin-top: 50px;
transition: all 0.25s ease-out;
&:hover{
    background: #F8FDFF;
    color: #17A4D0;
    border: 1px solid #17A4D0;
    transition: all 0.25s ease-in;
}
`