import { Container, CheckBoxC, Title } from "@components/Checkbox/styles";
import { useState } from "react";
import { TouchableOpacityProps } from "react-native";

type Props = {
  title: string;
};

export function CheckBox({ title, ...rest }: Props) {
  const [marked, setMarked] = useState([false]);

  return (
    <Container>
      <CheckBoxC />
      <Title />
    </Container>
  );
}
