import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Items from "./components/Holographics";
import GiftCards from "./components/GiftCards";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import AllPolish from "./components/AllPolish";
import Holographics from "./components/Holographics";
import UltraChromes from "./components/UltraChromes";
import UltraMetallics from "./components/UltraMetallics";
import Jellies from "./components/Jellies";
import Shimmers from "./components/Shimmers";

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/allpolish">
            <AllPolish />
          </Route>
          <Route path="/holographics">
            <Holographics />
          </Route>
          <Route path="/ultrachromes">
            <UltraChromes />
          </Route>
          <Route path="/ultrametallics">
            <UltraMetallics />
          </Route>
          <Route path="/jellies">
            <Jellies />
          </Route>
          <Route path="/shimmers">
            <Shimmers />
          </Route>
          <Route path="/giftcards">
            <GiftCards />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
