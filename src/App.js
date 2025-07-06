import React, { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Routes } from "./components/Routes";
const App = () => {
  const [DarkTheme, setDarkTheme] = useState(false);
  return (
    <div className={DarkTheme ? "dark" : ""}>
      <div>App</div>
    </div>
  );
};

export default App;
