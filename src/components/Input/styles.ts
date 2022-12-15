import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";
import { width } from "@utils/dimensions";
import theme from "@theme/index";

export const Container = styled.TextInput`
  ${({ theme }) => css`
    flex: 1;

    min-height: 56px;
    max-height: 56px;
    width: ${width * 0.7}px;
    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.BLACK};
    font-family: ${theme.FONT_FAMILY.AXIFORMA_LIGHT};
    font-size: 11px;
    border-radius: 30px;
    margin-bottom: 16px;
    padding: 20px;
  `}
`;

export const Fixator = styled.View`
flex-direction: row;
padding-bottom: 50px;

`;

export const TextMain = styled.Text`

color: ${theme.COLORS.WHITE};
font-family: ${theme.FONT_FAMILY.CLARIKA_REGULAR};
font-size: 16px;
`

export const TextSecond = styled.Text`
color: ${theme.COLORS.RED};
font-family: ${theme.FONT_FAMILY.CLARIKA_REGULAR};
font-size: 16px;
margin-left: 6px;

`;
