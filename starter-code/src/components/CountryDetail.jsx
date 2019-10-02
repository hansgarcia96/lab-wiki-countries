import React from "react";
import { Link } from "react-router-dom";

class CountryDetail extends React.Component {
  render() {
    const urlCode = this.props.match.params.id;
    const clone = [...this.props.list];
    let theActualCountry = clone.find(eachCountry => {
      return eachCountry.cca3 === urlCode;
    });

    const name = theActualCountry.name.common;
    const capital = theActualCountry.capital;
    const area = theActualCountry.area;

    const showBorders = () => {
      return theActualCountry.borders.map(eachBorder => {
        const borderCountry = this.props.list.find(eachCountry => {
          return eachCountry.cca3 === eachBorder;
        });

        return (
          <div key={eachBorder}>
            <Link to={"/countries/" + eachBorder}>
              {borderCountry.name.common}
            </Link>
          </div>
        );
      });
    };

    return (
      <div>
        <h2>{name}</h2>
        <h4>Capital: {capital}</h4>
        <h4>
          Area: {area} km<sup>2</sup>
        </h4>
        {showBorders()}
      </div>
    );
  }
}

export default CountryDetail;
