import React from 'react';
import {Alert} from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Label,
  Input,
  Form,
  Item,
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {isEmpty} from 'ramda';
import {firebaseConfig} from '../config/firebase';

class RestaurantsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      favoriteRestaurant: '',
    };
  }
  saveFavoriteRestaurant = () => {
    if (
      !isEmpty(this.state.fullName) &&
      !isEmpty(this.state.favoriteRestaurant)
    ) {
      firebaseConfig.ref('restaurants').push({
        name: this.state.fullName,
        restaurant: this.state.favoriteRestaurant,
      });
      this.setState({fullName: '', favoriteRestaurant: ''});
      Actions.pop();
    } else {
      Alert.alert(
        'Los inputs están vacíos',
        'Asegurarse que inputs no esten vacíos',
        [{text: 'OK', onPress: () => console.log('OK pressed!')}],
        {cancelable: false},
      );
    }
  };
  render() {
    const {fullName, favoriteRestaurant} = this.state;
    return (
      <Container>
        <Content>
          <Text>Escriba su nombre y su restaurante favorito.</Text>
          <Form>
            <Item floatingLabel>
              <Label>Nombre</Label>
              <Input
                placeholder="Nombre Completo"
                value={fullName}
                onChangeText={value => this.setState({fullName: value})}
              />
            </Item>
            <Item floatingLabel>
              <Label>Restaurante Favorito</Label>
              <Input
                placeholder="Restaurante Favorito"
                value={favoriteRestaurant}
                onChangeText={value =>
                  this.setState({favoriteRestaurant: value})
                }
              />
            </Item>
          </Form>
          <Button onPress={this.saveFavoriteRestaurant}>
            <Text>Guardar</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
export default RestaurantsScreen;
