import styled from "styled-components/native";
import theme from "@theme/index";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  align-items: center;
  flex: 1;
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  font-family: ${theme.FONT_FAMILY.AXIFORMA_BOLD};
  color: ${theme.COLORS.WHITE};
  padding: 5px;
  margin-left: 5px;
  
`;

export const ContainerMarvelMini = styled.View`
  align-items: center;
  background-color: ${theme.COLORS.RED};
  padding: 3px;
  

`;

export const LogoMini = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MARVEL_REGULAR};
  font-size: 30px;
  color: ${({theme}) => theme.COLORS.WHITE};
`;


export const Circle = styled.View`
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 12,5px;
`;

export const ContainerMenu = styled.View`
height: 100%;
width: 100%;
justify-content: start;
`;

export const ContainerMenuVisual = styled.View`
position: absolute;
height: 400px;
width: 400px;
background-color: ${theme.COLORS.BLACK};
border-radius: 18px ;
overflow: hidden;
border-color: ${theme.COLORS.RED};
z-index: 1;
`;

export const ImageMenu = styled.Image`
position: absolute;
height: 80px;
width: 80px;
border-radius: 100px;
border-color: ${theme.COLORS.RED};
overflow: hidden;
z-index: 3;
`

export const TextMenu = styled.Text`
font-family: ${theme.FONT_FAMILY.AXIFORMA_REGULAR};
font-size: 17px;
line-height: 30px;
color: ${theme.COLORS.RED};
position: absolute;
z-index: 2;
`;