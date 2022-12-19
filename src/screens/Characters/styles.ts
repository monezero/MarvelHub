import styled from "styled-components/native";
import theme from "@theme/index";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  align-items: center;
  flex: 1;
`;

export const TextTitle = styled.Text`
  font-size: 18px;
  font-family: ${theme.FONT_FAMILY.AXIFORMA_MEDIUM};
  color: ${theme.COLORS.WHITE};
  flex-direction: row;
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

export const TextDescription = styled.Text`
 font-family: ${({theme}) => theme.FONT_FAMILY.AXIFORMA_THIN};
 font-size: 14px;
 color: ${({theme}) => theme.COLORS.WHITE}
`;

export const TextMini = styled.Text`
font-family: ${({theme}) => theme.FONT_FAMILY.AXIFORMA_BOOK};
font-size: 10px;
color: ${({theme}) => theme.COLORS.RED}

`;

export const TextCharacterName = styled.Text`
font-family: ${({theme}) => theme.FONT_FAMILY.AXIFORMA_THIN};
font-size: 12px;
color: ${({theme}) => theme.COLORS.WHITE};

`;