import React from'react';
import { asset,Environment } from 'react-360';
import product from './data/productData';

const State = {                                                 // Creating Global Store State , the default one

    room: product.Product.roomName,
    info: product.Product.info,
    adjacentRooms: product.Product.adjacentRooms
}


const listeners = new Set();

function updateComponents() {
  for (const cb of listeners.values()) {
    cb();
  }
}

export function changeRoom(roomSelection) {
    let roomName = roomSelection;
  
    State.room = roomName;
    State.info = product[`${roomName}`].info;
    State.adjacentRooms = product[`${roomName}`].adjacentRooms;
  
    Environment.setBackgroundImage(asset(`./360_${product[`${roomName}`].img}`));

    updateComponents();
}

export function connect(Component) {
    return class Wrapper extends React.Component {
        state = {
            room: State.room,
            info: State.info,
            adjacentRooms: State.adjacentRooms
        }

        _listener = () => {
            this.setState({
              room: State.room,
              info: State.info,
              adjacentRooms: State.adjacentRooms
            });
          }
      
          componentDidMount() {
            listeners.add(this._listener);
          }

        render() {
            return (
                <Component    
                {...this.props}
                    room = {this.state.room}
                    info = {this.state.info}
                    adjacentRooms = {this.state.adjacentRooms}
                />
            )
        }

    }
}