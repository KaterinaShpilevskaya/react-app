import React, { useState } from "react";

import ThemeProvider from "./Context/Theme";
import { Theme } from "./Constants/@types";
import Router from "./Pages/Router";
import { Provider } from "react-redux";
import { store } from "./Redux/store";


const App = () => {
  const [theme, setTheme] = useState(Theme.Light);

  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };

  return (
    <Provider store={store}>
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <Router />
    </ThemeProvider>
    </Provider>
  );
};

export default App;