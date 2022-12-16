import styled, { css } from "styled-components/native";

export const Container = styled.View`
  /* flex: 1; */
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 8px;
    font-family: ${theme.FONT_FAMILY.CLARIKA_BOLD};
  `}
`;

export const CheckBoxC = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 10px;
    height: 10px;
    border-width: 2px;
    border-color: ${theme.COLORS.RED};
    margin-right: 5px;
  `}
`;
