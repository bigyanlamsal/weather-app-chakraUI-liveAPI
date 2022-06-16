import "./App.css";
import * as React from "react";
import { useState } from "react";

import Menu from "./components/menu";
import { useColorMode, Button } from "@chakra-ui/react";

const ThemeContext = React.createContext({
  mode: "light",
  toggleMode: () => {},
});

function App() {
  const [Theme, setTheme] = useState("light");
  // const toggleMode = () => { setTheme(!prev) }

  return (
    // <ThemeContext.Provider value="dark">
    //   <Menu />
    // </ThemeContext.Provider>
    <Menu />
  );
}

export default App;
