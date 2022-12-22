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
 color: ${({theme}) => theme.COLORS.WHITE};
 
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

export const ViewContainerMarvel = styled.View`
          margin-top: 10px;
          margin-left: 20px;
          flex-direction: "row";


`;

export const ViewLogoMarvel = styled.View`
 margin-left: 250px;
 margin-top: 10px;


`;

export const ViewTopChar = styled.View`
margin-top: 30px;

`;

export const ViewFlatlist = styled.View`
align-items: "center";
width: "50%";
`;

export const ViewDescription = styled.View`
align-items: "center";
width: 70%;
`;

export const ViewTextMini = styled.View`
margin-right: 225px;
`;

export const ViewApparitions = styled.View`
margin-left: 20px;
margin-top: 30px,
`;

export const ViewCharacters = styled.View`
flex-direction: "row";
width: "70%";
margin-top: 50px;

`;

export const ViewCharactersBanner = styled.View`
flex-direction: "row";
width: "100%";
margin-top: 30px;

`;

export const ViewCharactersName = styled.View`
flex-direction: "row";
padding: 25px;
margin-top: 6px;

`;