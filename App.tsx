import React, { useState } from "react";

import AppLoading from "expo-app-loading";

import Stack from "./navigation/index"

import loadResourcesAsync from "./services/loadResourcesAsync";

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

export default App;
