import React from "react"; //imr IMPORT REACT

import { Link } from "react-router-dom";

const CountryList = props => {
  const showCountries = () => {
    return props.list.map(eachCountry => {
      return (
        <div key={eachCountry.cca3}>
          <Link to={`/countries/${eachCountry.cca3}`}>
            <div className="container">
              <div className="row">
                <div className="col-5">
                  <div className="list-group">
                    <div
                      className="list-group-item list-group-item-action"
                      href={eachCountry.cca3}
                    >
                      {eachCountry.flag} {eachCountry.name.common}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };
  return <div className="countryList">{showCountries()}</div>;
};

export default CountryList;
