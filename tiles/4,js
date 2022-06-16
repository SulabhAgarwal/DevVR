import React from 'react';
import {
  asset,
  AppRegistry,
  Environment,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';
import product from './data/productData'

export default class DevVR extends React.Component {

  state = {
    room: product.Product.roomName,
    info: product.Product.info,
    adjacentRooms: product.Product.adjacentRooms
  }


  clickHandler(roomSelection)
  {
    this.setState({
      room: product[`${roomSelection}`].roomName,
      info: product[`${roomSelection}`].info,
      adjacentRooms: product[`${roomSelection}`].adjacentRooms
    });

   Environment.setBackgroundImage(asset(`./360_${product[`${roomSelection}`].img}`));
  }

  createRoomButtons(adjacentRooms) {
    let rooms = adjacentRooms;
    let buttons = [];
    rooms.map(room => (
      buttons.push(
        <VrButton key={`${room}` + '-button'} onClick={() => this.clickHandler(room)}>
          <Text style={{backgroundColor: 'green'}}> { room } </Text>
        </VrButton>
      )
    ))

    return buttons

  }
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Room</Text>
          <Text>{ this.state.room }</Text>
          { this.createRoomButtons(this.state.adjacentRooms)}
        </View>

          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>Room Info</Text>
            <Text>{ this.state.info }</Text>
          </View>
      </View>
      

      
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('DevVR', () => DevVR);
