import React, { useContext } from "react";
import { FavoritesContext } from "../FavoritesProvider";
import { PokemonCard } from "../components/PokemonCard";
import  Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {PokemonCard} from "../components/PokemonCard";
function Favorites() {
  // destructure addFavorite out of useContext
  const { favorites } = useContext(FavoritesContext);
  console.log(favorites);
  return (
    <Container>
      <Row className="mb-4">
        <Col sm="8" md="6" className="mx-auto">
          {favorites.map((pokemonGrab) => (
            <Col key={pokemonGrab.name}>
              <PokemonCard name={favorites.name} />
            </Col>
          ))}
          
        </Col>
      </Row>
    </Container>
  );
}

export { Favorites };
