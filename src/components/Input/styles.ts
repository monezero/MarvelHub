import { TextInput } from "react-native";
import styled, {css} from "styled-components/native";

export const Container = styled.TextInput`
${({theme}) => css`
flex: 1;

min-height: 56px;
max-height: 56px;
width: 246px;
background-color: ${theme.COLORS.WHITE};
color: ${theme.COLORS.BLACK};
font-family: ${theme.FONT_FAMILY.AXIFORMA_LIGHT};
font-size: 11px;
border-radius: 30px;
margin-bottom: 16px;
padding: 20px;
`}
`;





