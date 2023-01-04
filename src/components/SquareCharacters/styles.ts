import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");


export const Container = styled.View`
  margin-top: 10px;
  width: ${width * 0.7}px;
  flex-direction: row;
   

`;

export const Apparitions = styled.Image`
 width: 55px;
 height: 55px;
 margin-left: 6px;
 border-radius: 12px;
 margin-top: 6px;

`;