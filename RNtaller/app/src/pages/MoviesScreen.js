import React, {Component} from 'react';
import {Container, Content, Text, Form, Item, Button, Label, Input} from 'native-base';
import {connect} from 'react-redux';
import {sortBy, prop, isEmpty} from 'ramda';
import MoviesList from '../components/movies/MoviestList';
import FavoriteMoviePicker from '../components/movies/FavoriteMoviePicker';
import {saveFavoriteMovie} from '../redux/actions/index.actions';

class MoviesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {title: 'Avengers: Endgame', releaseYear: '2019'},
        {title: 'Joker', releaseYear: '2019'},
      ],
      favoriteMovie: this.props.favoriteMovie || '',
      newFavoriteMovie: '',
      newReleaseYear: '',
    };
  }
  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            movies: this.state.movies.concat(responseJson.movies),
          },
          () => {},
        );
      });
  }
  assignFavoriteMovie = favoriteMovie => {
    this.props.dispatch(saveFavoriteMovie(favoriteMovie));
    this.setState({favoriteMovie});
  };
  saveNewFavoriteMovie =()=>{
    const movieObject = {title: this.state.newFavoriteMovie, releaseYear: this.state.newReleaseYear};
    this.setState(state => {
      const movies = state.movies.concat(movieObject);
      return {
        movies,
        newFavoriteMovie: '',
        newReleaseYear: '',
      };
    });
  };
  render() {
    const sortedMovies = sortBy(prop('title'), this.state.movies);
    const {favoriteMovie, newFavoriteMovie, newReleaseYear} = this.state;
    return (
      <Container>
        <Content>
          <MoviesList movies={sortedMovies} />
          <Text>Escoge tu pelicula favorita: </Text>
          <FavoriteMoviePicker
            movies={sortedMovies}
            assignFavoriteMovie={favoriteMovie =>
              this.assignFavoriteMovie(favoriteMovie)
            }
            favoriteMovie={favoriteMovie}
          />
          {!isEmpty(favoriteMovie) && (
            <Text>{`Mi película favorita es: ${favoriteMovie}`}</Text>
          )}
           <Form>
            <Item floatingLabel>
              <Label>Pelicula</Label>
              <Input
                placeholder="Pelicula Favorita"
                value={newFavoriteMovie}
                onChangeText={value => this.setState({newFavoriteMovie: value})}
              />
            </Item>
            <Item floatingLabel>
              <Label>Release Year</Label>
              <Input
                placeholder="Release Year"
                value={newReleaseYear}
                onChangeText={value =>
                  this.setState({newReleaseYear: value})
                }
              />
            </Item>
          </Form>
          <Button onPress={this.saveNewFavoriteMovie}>
            <Text>Guardar</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({movies}) => ({
  favoriteMovie: movies.favoriteMovie,
});
export default connect(mapStateToProps)(MoviesScreen);
