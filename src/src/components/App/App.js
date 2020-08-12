import React, { useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Theme, GlobalStyle, useStateContext } from "helpers";
//import { Nav} from "components";
import S from "./styled";

export const App = () => {
  //const [{ profile, colorMode, saving, cache }, dispatch] = useStateContext();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={Theme["light"]}>
      <GlobalStyle />
      <S.App>
        <Router>
          <h1>Book</h1>
        </Router>
      </S.App>
    </ThemeProvider>
  );
};
