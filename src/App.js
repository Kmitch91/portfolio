import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import Homepage from "./components/homePage";
//import AboutMe from
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
} from "@material-ui/core/";

const themeColor = createMuiTheme({
  palette: {
    primary: {
      main: "#cca43b",
    },
    secondary: {
      main: "#0092ff",
    },
  },
});

function App() {
  return (
    <div className="App">
      <Router>
        <MuiThemeProvider theme={themeColor}>
          <CssBaseline />
          <NavBar />
          <div className={"main-body"}>
            <Switch>
              {/*<Route path={"/about"}>
                <AboutMe />
              </Route>
              <Route path={"/resume"}>
                <Resume />
  </Route>*/}
              <Route exact path={"/"}>
                <Homepage />
              </Route>
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    </div>
  );
}

export default App;
