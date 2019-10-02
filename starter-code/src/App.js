import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import countries from "./countries.json";

import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetail";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: countries
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>

        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <CountryList {...props} list={this.state.countries} />
            )}
          />

          <Route
            path="/countries/:id"
            render={props => (
              <CountryDetails {...props} list={this.state.countries} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
