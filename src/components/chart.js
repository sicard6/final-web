import React, { Component } from "react";
import * as serviceWorker from "../serviceWorker";
import * as d3 from "d3";

export default class Chart extends Component {
  componentDidMount() {
    this.drawChart(this.props.movies);
  }

  drawChart(data) {
    const width = 700;
    const height = 500;
    const margin = { top: 10, left: 50, bottom: 40, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;

    const canvas = d3.select(this.refs.canvas);

    const svg = canvas
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("border-color", "black")
      .style("border-style", "solid")
      .style("border-width", "1px");

    let g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const y = d3
      .scaleLinear()
      .domain([0, 10000000])
      .range([iheight, 0]);

    const x = d3
      .scaleBand()
      .domain(data.map(d => d.id))
      .range([0, iwidth])
      .padding(0.1);

    const bars = g.selectAll("rect").data(data);

    bars
      .enter()
      .append("rect")
      .attr("class", "bar")
      .style("fill", "steelblue")
      .attr("x", d => x(d.id))
      .attr("y", d => y(d.views))
      .attr("height", d => iheight - y(d.views))
      .attr("width", x.bandwidth());

    g.append("g")
      .classed("x--axis", true)
      .call(d3.axisBottom(x))
      .attr("transform", `translate(0, ${iheight})`);

    g.append("g")
      .classed("y--axis", true)
      .call(d3.axisLeft(y));
  }
  render() {
    return (
      <div className="card shadow">
        <div ref="canvas"></div>
      </div>
    );
  }
}

serviceWorker.register();
