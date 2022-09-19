import React, { useState } from "react";

import HomeScreen from "./screens/HomeScreen";
import ActionScreen from "./screens/ActionScreen";
import Navigator from "./routes/homeStack";

const App = () => {
  return (
    <>
      <Navigator></Navigator>
    </>
  );
};

export default App;
