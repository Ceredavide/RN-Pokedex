import React, { useState } from "react";

import { Asset } from "expo-asset";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Stack from "./src/navigation/index";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  if (isLoading) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={console.error}
        onFinish={() => setIsLoading(false)}
      />
    );
  }

  return <Stack />;
};

async function loadResourcesAsync() {
  try {
    await Asset.loadAsync([require("./assets/images/loadingPokemon.gif")]);
    await Font.loadAsync({
      "Avenir-Book": require("./assets/fonts/Avenir-Book.otf"),
      "Avenir-Heavy": require("./assets/fonts/Avenir-Heavy.ttf"),
      "Avenir-Medium": require("./assets/fonts/Avenir-Medium.otf"),
      "Avenir-Roman": require("./assets/fonts/Avenir-Roman.otf"),
    });
  } catch (error) {
    console.error(error);
  }
}

export default App;
