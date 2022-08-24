import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Filmes from "./Components/Filmes";
import Séries from "./Components/Séries";
import HomePage from "./Components/HomePage";
import styled from "styled-components";

export const Pagina = styled.div`
  width: 100%;
  background-color: #dda0dd;
  display: flex;
  flex-direction: column;
  padding: 0 0 5vh;

  h1 {
    width: 100%;
    height: 8vh;
    margin-top: 0%;
    background-color: black;
    color: purple;
    text-align: center;
  }

  ul {
    height: 6vh;
    margin-top: -4%;
    background-color: #da70d6;
  }
  li {
    color: white;
    display: inline;
    padding: 0 0 0 15vw;
    margin-top: 2vh;
  }
  h2 {
    padding: 3vh 6vh 6vh 3vh;
    text-align: center;
  }
  p {
    margin-right: 5vh;
    text-align: center;
  }
  border-image {
    display: flex;
    align-items: center;
  }
`;

export default class extends Component {
  render() {
    return (
      <Pagina>
        <Router>
          <h1>Universos cinematográficos</h1>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/Filmes">Filmes</Link>
            </li>
            <li>
              <Link to="/series">Séries</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="series" element={<Séries />} />
            <Route path="filmes" element={<Filmes />} />
          </Routes>
        </Router>
      </Pagina>
    );
  }
}
