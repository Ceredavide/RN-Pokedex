import { Asset } from "expo-asset";
import * as Font from "expo-font";

export default async function loadResourcesAsync() {
  try {
    await Asset.loadAsync([
      require("../assets/images/loadingPokemon.gif"),
    ])
    await Font.loadAsync({
        "Avenir-Book": require("../assets/fonts/Avenir-Book.otf"),
        "Avenir-Heavy": require("../assets/fonts/Avenir-Heavy.ttf"),
        "Avenir-Medium": require("../assets/fonts/Avenir-Medium.otf"),
        "Avenir-Roman": require("../assets/fonts/Avenir-Roman.otf"),
      });
  } catch (error) {
    console.error(error);
  }
}
