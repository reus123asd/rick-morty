import { useState, useEffect } from "react";
import { Filtrar } from "./components/Filtrar";
import { Card } from "./components/Card";
import Navbar from "./components/Navbar";
import './App.scss'

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  const url = "https://rickandmortyapi.com/api/character/";

  useEffect(() => {
    const getPersonajes = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPersonajes(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPersonajes();
  }, []);

  const personjesFiltrados = personajes.filter((personaje) =>
    personaje.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div className="container">
      <Navbar></Navbar>
      <Filtrar filter={filter} setFilter={setFilter} />

      <section className="container_lista-personajes">
        {loading ? (
          <p>Cargando...</p>
        ) : personjesFiltrados.length > 0 ? (
          personjesFiltrados.map((personaje) => (
            <Card key={personaje.id} personaje={personaje} />
          ))
        ) : (
          <p>
            No se encontro personajes con la busqueda{" "}
            <strong>"{filter}"</strong>.
          </p>
        )}
      </section>
    </div>
  );
}

export default App;
