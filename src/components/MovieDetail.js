import React, { Component } from "react";
import * as serviceWorker from "../serviceWorker";

export default class MovieDetail extends Component {
  render() {
    return this.props.movie.name === undefined ? (
      <div></div>
    ) : (
      <div className="card shadow">
        <div className="row justify-content-center">
          <img
            src={this.props.movie.poster}
            className="card-img-top"
            style={{ width: "50%" }}
            alt="movie"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{this.props.movie.name}</h2>
          <p className="card-text">{this.props.movie.description}</p>
          <h5 className="card-title">cast: {this.props.movie.cast}</h5>
        </div>
      </div>
    );
  }
}
serviceWorker.register();
