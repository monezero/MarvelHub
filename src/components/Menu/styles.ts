import styled from "styled-components/native";
import theme from "@theme/index";



export const ContainerMenu = styled.View`
height: 100%;
width: 100%;
flex-direction: column;
`;

export const ContainerMenuVisual = styled.View`
right: 350px;
position: absolute;
height: 280px;
width: 190px;
background-color: ${theme.COLORS.BLACK};
border-width: 2px;
border-radius: 30px ;
overflow: hidden;
border-color: ${theme.COLORS.RED};
z-index: 6;
`;

export const ImageMenu = styled.Image`
position: absolute;
height: 60px;
width: 60px;
margin-left: 26px;
margin-top: 10px;
border-image: 30px;
border-color: ${theme.COLORS.RED};
overflow: hidden;
z-index: 3;
`
export const TextMenu = styled.Text`
margin-left: 36px;
margin-top: 60px;
font-family: ${theme.FONT_FAMILY.AXIFORMA_REGULAR};
font-size: 17px;
line-height: 30px;
color: ${theme.COLORS.RED};
position: relative;
z-index: 2;
`;