import { ThemeProvider } from "styled-components";
import Input from "./common/Navigation/Input";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Input />
    </ThemeProvider>
  );
}

export default App;
