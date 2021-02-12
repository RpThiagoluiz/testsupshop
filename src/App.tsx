//Routes
import Routes from "./routes";

//Styles
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

//Theme Fixed For now. Mayber create a themeContext
import lightTheme from "./styles/themes/light";

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <Routes />
  </ThemeProvider>
);

export default App;
