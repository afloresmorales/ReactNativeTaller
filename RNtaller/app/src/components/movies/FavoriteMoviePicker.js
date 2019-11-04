import React from 'react';
import {Picker} from 'react-native';

function FavoriteMoviePicker({favoriteMovie, movies, assignFavoriteMovie}) {
  return (
    <Picker
      selectedValue={favoriteMovie}
      onValueChange={selectedMovie => assignFavoriteMovie(selectedMovie)}>
      {movies.map((movie, pickerIndex) => (
        <Picker.Item
          key={pickerIndex}
          label={movie.title}
          value={movie.title}
        />
      ))}
    </Picker>
  );
}
export default FavoriteMoviePicker;
