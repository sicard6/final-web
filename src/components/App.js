import React, { Component } from "react";
import MovieList from "./MovieList";
import * as serviceWorker from "../serviceWorker";
import MovieDetail from "./MovieDetail";
import Chart from "./chart";

export default class App extends Component {
  constructor(props) {
    super(props);

    let moviesES = [];
    let moviesEN = [];
    if (
      navigator.onLine &&
      (localStorage.getItem("moviesES") === null ||
        localStorage.getItem("moviesEN") === null)
    ) {
      fetch(
        "https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json"
      ).then(resp => {
        resp.json().then(jsonRespone => {
          localStorage.setItem("moviesES", JSON.stringify(jsonRespone));
          moviesES = jsonRespone;
          fetch(
            "https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json"
          ).then(resp2 => {
            resp2.json().then(jsonRespone2 => {
              localStorage.setItem("moviesEN", JSON.stringify(jsonRespone2));
              moviesEN = jsonRespone2;
              this.state = {
                moviesES: moviesES,
                moviesEN: moviesEN,
                selected: {}
              };
            });
          });
        });
      });
    } else if (
      localStorage.getItem("moviesES") !== null &&
      localStorage.getItem("moviesEN") !== null
    ) {
      console.log("esta en el localStorage");
      moviesES = JSON.parse(localStorage.getItem("moviesES"));
      moviesEN = JSON.parse(localStorage.getItem("moviesEN"));
      this.state = {
        moviesES: moviesES,
        moviesEN: moviesEN,
        selected: {}
      };
    }
  }
  select = movie => {
    console.log(movie);
    this.setState({
      selected: movie
    });
  };

  render() {
    return (
      <div className="container-fluid m-3">
        <div>
          <p>
            Lenguage: {window.navigator.language} (no alcanca al date pero de
            resto si!!!)
          </p>
        </div>
        <div className="row">
          <div className="col-8">
            <MovieList
              moviesES={this.state.moviesES}
              moviesEN={this.state.moviesEN}
              select={this.select}
            />
          </div>
          <div className="col-4">
            <MovieDetail movie={this.state.selected} />
          </div>
        </div>
        <div className="container-fluid col-6">
          <Chart movies={this.state.moviesEN} />
        </div>
      </div>
    );
  }
}

serviceWorker.register();
