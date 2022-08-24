import React, { Component } from "react";
import axios from "axios";

const filmesAPI = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=dbe40ffe87bcf2ba4773739d199a6291&language=pt-BR&page=1`
});

export default class extends Component {
  state = {
    movies: []
  };
  addFilmes = async () => {
    const resposta = await filmesAPI.get();
    const api = resposta.data.results.map((item) => {
      return {
        title: item.title,
        overview: item.overview,
        image: `https://image.tmdb.org/t/p/w200/${item.poster_path}`
      };
    });
    this.setState({
      movies: api
    });
  };
  componentDidMount() {
    this.addFilmes();
  }
  render() {
    return (
      <div>
        <h2>Filmes em alta para conhecer:</h2>
        <ol>
          {this.state.movies.map((item) => (
            <>
              <li>{item.title}</li>
              <p>{item.overview}</p>
              <img src={item.image} alt={`Poster do filme ${item.title}`} />
            </>
          ))}
        </ol>
      </div>
    );
  }
}
