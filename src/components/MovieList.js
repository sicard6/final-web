import React, { Component } from "react";
import * as serviceWorker from "../serviceWorker";
import { FormattedNumber } from "react-intl";
import { FormattedDate } from "react-intl";

export default class MovieList extends Component {
  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead className="thead-dark">
            {window.navigator.language === "es" ? (
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Dirigido por</th>
                <th scope="col">Pais</th>
                <th scope="col">Presupuesto</th>
                <th scope="col">Estreno</th>
                <th scope="col">Vistas</th>
              </tr>
            ) : (
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Directed By</th>
                <th scope="col">Country</th>
                <th scope="col">Budget</th>
                <th scope="col">Release</th>
                <th scope="col">Views</th>
              </tr>
            )}
          </thead>
          <tbody>
            {window.navigator.language === "es"
              ? this.props.moviesES.map((movie, index) => (
                  <tr
                    key={movie.name}
                    onClick={() => {
                      this.props.select(movie);
                    }}
                  >
                    <th scope="row">{index}</th>
                    <td>{movie.name}</td>
                    <td>{movie.directedBy}</td>
                    <td>{movie.country}</td>
                    <td>{movie.budget}</td>
                    <td>{movie.releaseDate}</td>
                    <td>
                      <FormattedNumber value={movie.views} />
                    </td>
                  </tr>
                ))
              : this.props.moviesEN.map((movie, index) => (
                  <tr
                    key={movie.name}
                    onClick={() => {
                      this.props.select(movie);
                    }}
                  >
                    <th scope="row">{index}</th>
                    <td>{movie.name}</td>
                    <td>{movie.directedBy}</td>
                    <td>{movie.country}</td>
                    <td>{movie.budget}</td>
                    <td>{movie.releaseDate}</td>
                    <td>
                      <FormattedNumber value={movie.views} />
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    );
  }
}
serviceWorker.register();
