import styled from "styled-components/native";
import theme from "@theme/index";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  align-items: center;
  justify-content: center;
`;

export const ContainerMarvel = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${theme.COLORS.RED};
  padding: 7px;
  margin-bottom: 50px;
`;

export const Logo = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MARVEL_REGULAR};
  font-size: 70px;
  color: #fff;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.AXIFORMA_BOLD};
  font-size: 18px;
  color: #fff;
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.AXIFORMA_LIGHT};
  font-size: 14px;
  color: #fff;
  margin-bottom: 10px;
`;
