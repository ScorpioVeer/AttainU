import React from "react";
import ReactDOM from "react-dom";
import {'BrowserRouter, Switch, Route'} from 'react-router-dom';
import App from "./components/App";
import App from "./components/Success";

const Routes = () (
  <BrowserRouter>
    <switch>
      <Route exact path = "/" component = {App}/>
      <Route path ="/success" component = {Success}/>
    </switch>
  </BrowserRouter>
)

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Routes />,
  rootElement
);
