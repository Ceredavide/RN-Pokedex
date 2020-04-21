import React from "react";

import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

const LoadingScreen = ({ setIsLoading }) => {
    return (
        <AppLoading
            startAsync={loadResourcesAsync}
            onError={handleLoadingError}
            onFinish={() => setIsLoading(false)}
        />
    );
};

const loadResourcesAsync = async () => {
    return Promise.all([
        Asset.loadAsync([
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
        ]),
        Font.loadAsync({
            "Avenir-Book": require("../assets/fonts/Avenir-Book.otf"),
            "Avenir-Heavy": require("../assets/fonts/Avenir-Heavy.ttf"),
            "Avenir-Medium": require("../assets/fonts/Avenir-Medium.otf"),
            "Avenir-Roman": require("../assets/fonts/Avenir-Roman.otf"),
        })
    ]);
};

const handleLoadingError = error => {
    console.log(error)
};

export default LoadingScreen;
