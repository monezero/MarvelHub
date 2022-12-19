import { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  ListRenderItem,
  FlatList,
} from "react-native";

export function FlatlistHeros() {
  const [images, setImages] = useState<ImageSourcePropType[]>([
    require("@assets/wanda.png"),
    require("@assets/vision.png"),
    require("@assets/doctor_strange.png"),
  ]);
  const render_Item: ListRenderItem<ImageSourcePropType> = ({
    item,
    index,
  }) => (
    <Image
      source={item}
      key={index}
      style={{
        height: 200,
        width: 200,
        borderRadius: 18,
        borderColor: "#ff0000",
        marginLeft: 10,
      }}
    />
  );
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={images}
      renderItem={render_Item}
      style={{
        width: 300,

        borderColor: "#ff0000",
        borderRadius: 30,
      }}
    />
  );
}
