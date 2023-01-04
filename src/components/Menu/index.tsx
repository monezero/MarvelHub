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
        <ImageMenu source={require("@assets/profile.png")} />
        <TextMenu>Perfil</TextMenu>
        <TextMenu style={{ marginTop: 4 }}>Configurações</TextMenu>
        <TextMenu style={{ marginTop: 2 }}>Visite nosso site</TextMenu>
        <TextMenu style={{ marginTop: 0 }} onPress={props.onPressLogout}>
          Sair
        </TextMenu>
      </ContainerMenuVisual>
    </ContainerMenu>
  );
};
