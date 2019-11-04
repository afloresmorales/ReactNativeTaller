import React from 'react';
import {Card, CardItem, Text} from 'native-base';

function MoviesList(props) {
  return (
    <Card>
      <CardItem header>
        <Text>Mejores Películas</Text>
      </CardItem>
      {props.movies.map((movie, movieIndex) => (
        <CardItem key={movieIndex}>
          <Text>{movie.title}, </Text>
          <Text>{movie.releaseYear}</Text>
        </CardItem>
      ))}
    </Card>
  );
}
export default MoviesList;
