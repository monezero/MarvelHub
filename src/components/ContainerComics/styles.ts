import theme from "@theme/index";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.View`
margin-top: 30px;
width: 80px;
height: 122px;
flex-direction: row;
`;

export const Image = styled.Image`
margin-left: 30px;
width: 160px;
height: 244px;
border-radius: 30px;
`;

export const ContainerTitle = styled.Text`
font-family: ${theme.FONT_FAMILY.AXIFORMA_BOLD};
font-size: 12px;
color: ${theme.COLORS.WHITE};
position: absolute;
`;

export const ContainerBottom = styled.View`
margin-top: 170px;
width: 80px;
height: 122px;
flex-direction: row;
`;

export const ContainerVisual = styled(LinearGradient)`
margin-top: 116px;
margin-left: 30px;
width: 160px;
height: 130px;
border-radius: 30px;
position: absolute;
`

export const ContainerDescription = styled.Text`

font-family: ${theme.FONT_FAMILY.AXIFORMA_THIN};
font-size: 8px;
position: absolute;
color: ${theme.COLORS.WHITE};
`;

export const ContainerDetails = styled.Text`
font-family: ${theme.FONT_FAMILY.AXIFORMA_THIN};
font-size: 12px;
position: absolute;
color: ${theme.COLORS.WHITE};



`;