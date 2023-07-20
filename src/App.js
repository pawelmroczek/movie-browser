import { ThemeProvider } from "styled-components";
import Input from "./common/Navigation/Input";
import { theme } from "./theme";
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        {/* here is a place for navigation with my input inside of it */}
        <Input />
        <Switch>
          <Route path="/movies">movies</Route>
          <Route path="/people">people</Route>
          <Route path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
