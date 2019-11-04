import React from 'react';
import {Container, Content, Text, Button, Card, CardItem} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {isEmpty} from 'ramda';
import {firebaseConfig} from '../config/firebase';
import {saveRestaurantsList} from '../redux/actions/index.actions';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {restaurants: []};
  }
  componentDidMount() {
    firebaseConfig.ref('/restaurants').on('value', dataSnapshot => {
      let restaurants = [];
      dataSnapshot.forEach(child => {
        console.log('restaurant name: ', child.toJSON().name);
        restaurants.push(child.toJSON());
      });
      this.props.dispatch(saveRestaurantsList(restaurants));
    });
  }
  componentDidUpdate(prevProps) {
    console.log('outside props: ', this.props.restaurants);
    if (this.props.restaurants !== prevProps.restaurants) {
      console.log('props: ', this.props.restaurants);
      this.setState({restaurants: this.props.restaurants});
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Text>Esto es el homepage.</Text>
          <Button onPress={() => Actions.movies()}>
            <Text> Click para ver las mejores películas.</Text>
          </Button>
          {!isEmpty(this.props.favoriteMovie) && (
            <Text>tu pelicula favorita es: {this.props.favoriteMovie}</Text>
          )}
          <Card>
            {this.state.restaurants.map((restaurant, index) => (
              <CardItem key={index}>
                <Text>{restaurant.name}: </Text>
                <Text>{restaurant.restaurant} </Text>
              </CardItem>
            ))}
          </Card>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = ({movies, home}) => ({
  favoriteMovie: movies.favoriteMovie,
  restaurants: home.restaurants,
});
export default connect(mapStateToProps)(HomeScreen);
