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
`

export const ContainerMenu = styled.View`
height: 100%;
width: 100%;
justify-content: start;
`;


export const ContainerRight = styled.View`
left: 230px;
margin-top: 10px;
`;

export const ContainerTop = styled.View`
margin-top: 10px;
margin-left: 20px;
flex-direction: row;
`

export const ContainerLeftTop = styled.View`
margin-left: 250px;
margin-top: 10px;
`;

export const ContainerRow = styled.View`
flex-direction: row;
margin-top: 30px;
margin-left: 25px;
`;


export const ContainerCenter = styled.View`
justify-content: center;
align-items: center;
margin-top: 200px;

`;