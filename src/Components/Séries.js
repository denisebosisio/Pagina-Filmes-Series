import React, { Component } from "react";
import axios from "axios";

const seriesAPI = axios.create({
  baseURL: `https://api.themoviedb.org/3/tv/popular?api_key=dbe40ffe87bcf2ba4773739d199a6291&language=pt-BR&page=1`
});

export default class extends Component {
  state = {
    series: []
  };
  addSeries = async () => {
    const response = await seriesAPI.get();
    const info = response.data.results.map((item) => {
      return {
        title: item.name,
        sinopse: item.overview,
        image: `https://image.tmdb.org/t/p/w200/${item.poster_path}`
      };
    });
    this.setState({
      series: info
    });
  };
  componentDidMount() {
    this.addSeries();
  }
  render() {
    return (
      <div>
        <h2>Séries em alta para maratonar:</h2>
        <ol>
          {this.state.series.map((item) => (
            <>
              <li>{item.title}</li>
              <img src={item.image} />
              <p>{item.sinopse}</p>
            </>
          ))}
        </ol>
      </div>
    );
  }
}
