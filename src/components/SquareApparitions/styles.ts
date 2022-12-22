import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");


export const Container = styled.View`
  width: ${width * 0.7}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
   

`;

export const Apparitions = styled.Image`
 width: 55px;
 height: 55px;
 margin-left: 6px;
 border-radius: 12px;
 margin-top: 6px;

`;