import { width } from "@utils/dimensions";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.RED : theme.COLORS.RED_DARK};
  border-radius: 30px;
  justify-content: center;
  width: ${width * 0.7}px;
  align-items: center;
  padding: 3%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.AXIFORMA_LIGHT};
  `}
`;
