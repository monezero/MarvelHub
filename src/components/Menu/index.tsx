import {
  ContainerMenu,
  ContainerMenuVisual,
  ImageMenu,
  TextMenu,
} from "./styles";

interface Props {
  onPress: () => void;
  onPressLogout: () => void;
}

export const Menu = (props: Props) => {
  return (
    <ContainerMenu>
      <ContainerMenuVisual>
        <ImageMenu source={require("@assets/profile1.png")} />
        <TextMenu style={{ top: 10 }}>Perfil</TextMenu>
        <TextMenu style={{ marginTop: 14 }}>Configurações</TextMenu>
        <TextMenu style={{ marginTop: 12 }}>Visite nosso site</TextMenu>
        <TextMenu style={{ marginTop: 10 }} onPress={props.onPressLogout}>
          Sair
        </TextMenu>
      </ContainerMenuVisual>
    </ContainerMenu>
  );
};
