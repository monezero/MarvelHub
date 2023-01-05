import theme from "@theme/index";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
margin-top: 60px;
width: 100%;
height: 100%;
flex-direction: row;
flex-wrap: wrap;
`

export const ImageContainer = styled.View`
margin-left: 30px;
width: 160px;
height: 244px;
border-radius: 30px;
z-index: 1;
`

export const Image = styled.Image`
margin-left: 30px;
width: 160px;
height: 244px;
border-radius: 30px;
z-index: 1;
`;

export const ContainerTitle = styled.Text`
margin-top: 10px;
align-self: center;
font-family: ${theme.FONT_FAMILY.AXIFORMA_BOLD};
font-size: 12px;
color: ${theme.COLORS.WHITE};
position: relative;
z-index: 0;
`;

export const ContainerBottom = styled.View`
margin-top: 170px;
width: 80px;
height: 122px;
flex-direction: row;
`;

export const ContainerVisual = styled(LinearGradient)`
margin-top: 114px;
margin-left: 30px;
width: 160px;
height: 130px;
border-radius: 30px;
position: absolute;
z-index: 2;
`

export const ContainerDescription = styled.Text`

align-content: center;
align-self: center;
margin-left: 10px;
margin-top: 10px;
line-height: 12px;
font-family: ${theme.FONT_FAMILY.AXIFORMA_THIN};
font-size: 8px;
position: relative;
z-index: 0;
color: ${theme.COLORS.WHITE};
`;

export const ContainerDetails = styled.Text`
margin-top: 10px;
align-self: center;
font-family: ${theme.FONT_FAMILY.AXIFORMA_THIN};
font-size: 12px;
position: relative;
z-index: 0;
color: ${theme.COLORS.WHITE};
`;

export const ImageSeeDetails = styled.Image`
margin-bottom: 80px;
margin-left: 16px;
position: absolute;
height: 200px;
width: 380px;
border-radius: 30px;
z-index: 4;
`;

export const ContainerSeeDetails = styled(LinearGradient)`
margin-top: 120px;
margin-left: 28px;
width: 356px;
height: 480px;
border-radius: 30px;
position: absolute;
z-index: 3;
text-align: center;
`

export const Container1 = styled.View`
position: absolute;
width: 80%;
height: 80%
`;

export const TitleSeeDetails = styled.Text`
position: relative;
font-family: ${theme.FONT_FAMILY.AXIFORMA_BOLD};
font-size: 20px;
color: ${theme.COLORS.WHITE};
margin-top: 90px;
align-self: flex-start;
margin-left: 30px;

`;

export const ApparitionsSeeDetails = styled.Text`
position: absolute;
font-family: ${theme.FONT_FAMILY.AXIFORMA_BOLD};
font-size: 16px;
color: ${theme.COLORS.WHITE};
margin-top: 130px;
align-self: flex-start;
margin-left: 30px;
z-index: 4;
`;

export const ApparitionsMoviesSeeDetails = styled.Text`
position: relative;
font-family: ${theme.FONT_FAMILY.AXIFORMA_THIN};
font-size: 16px;
color: ${theme.COLORS.WHITE};
align-self: flex-start;
margin-top: 30px;
line-height: 22px;
margin-left: 30px;

`;

export const RatingsSeeDetails = styled.Text`
position: absolute;
font-family: ${theme.FONT_FAMILY.AXIFORMA_BOLD};
font-size: 16px;
color: ${theme.COLORS.WHITE};
margin-top: 390px;
align-self: flex-start;
margin-left: 30px;
z-index: 4;
`

export const BuySeeDetails = styled.Text`
position: absolute;
font-size: 12px;
margin-top: 260px;
align-self: flex-start;
margin-left: 30px;
font-family: ${theme.FONT_FAMILY.AXIFORMA_MEDIUM};
color: ${theme.COLORS.WHITE}
`;

export const BuyIconSeeDetails = styled.Image`
position: absolute;
margin-top: 280px;
margin-left: 20px;

height: 80px;
width: 80px;

`;