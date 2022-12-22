import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");


export const Container = styled.View`
  width: ${width * 0.7}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const HeroesBanner = styled.Image`
 width: 140px;
 height: 70px;
 margin-left: 18px;
 border-radius: 12px;
 margin-top: 6px;

`;







