import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRouteProps } from "./auth.routes";

export function outRoutes() {
  const navigation = useNavigation<AuthNavigatorRouteProps>();

  function handleReturnX() {
    navigation.navigate("allComics");
  }
}
