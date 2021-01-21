import { Asset } from "expo-asset";
import * as Font from "expo-font";

export default async function loadResourcesAsync() {
  try {
    await Asset.loadAsync([
      require("../assets/icons/types/bug.svg"),
      require("../assets/icons/types/dark.svg"),
      require("../assets/icons/types/dragon.svg"),
      require("../assets/icons/types/electric.svg"),
      require("../assets/icons/types/fairy.svg"),
      require("../assets/icons/types/fighting.svg"),
      require("../assets/icons/types/fire.svg"),
      require("../assets/icons/types/flying.svg"),
      require("../assets/icons/types/ghost.svg"),
      require("../assets/icons/types/grass.svg"),
      require("../assets/icons/types/ground.svg"),
      require("../assets/icons/types/ice.svg"),
      require("../assets/icons/types/normal.svg"),
      require("../assets/icons/types/poison.svg"),
      require("../assets/icons/types/psychic.svg"),
      require("../assets/icons/types/rock.svg"),
      require("../assets/icons/types/steel.svg"),
      require("../assets/icons/types/water.svg"),
      require("../assets/images/loadingPokemon.gif"),
    ]),
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
