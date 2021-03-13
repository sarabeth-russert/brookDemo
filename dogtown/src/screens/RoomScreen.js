import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rooms from '../components/Rooms'
import CardDeck from 'react-bootstrap/CardDeck'


const RoomScreen = () => {
  const [dogs, setDogs] = useState({
    Baxter: {name: 'Baxter', breed: 'Lab', keyCareInfo: 'Loves pets!', room: 'none'}, 
    Mario: {name: 'Mario', breed: 'Boston', keyCareInfo: 'Plays with slippers', room: 'none'}, Indiana: {name: 'Indiana', breed: 'Bouvier', keyCareInfo: 'Loves Cookies', room: 'none'}, 
    Mj: {name: 'Mj', breed: 'Schnauzer', keyCareInfo: 'Loves Cookies', room: 'none'}})
  const [rooms, setRooms] = useState([
    {name: 'Big Dogs', occupancy: 10, dogs: [dogs.Baxter], image: './bigDog.jpg'},
    {name: 'Small Dogs', occupancy: 15, dogs: [], image: './smallDog.jpg'},
    {name: 'Kennel', occupancy: 20, dogs: [], image: './kennel.jpg'},
    {name: 'Walks', occupancy: 3, dogs: [], image: './walk.jpg'}]);

    const addDog = (pup, room) => {
      emptyRooms();
      updateDogs(pup, room);
      updateRooms();
    }

    const emptyRooms = () => {
      let temp = [];
      for (let i = 0; i < rooms.length; i++) {
        rooms[i].dogs = []
        temp.push(rooms[i])
      }
      setRooms(temp);
    }

    const updateDogs = (pup, room) => {
      let dogMap = {};
      for (let dog in dogs) {
        dogMap[dog] = dogs[dog]
        if (dogMap[dog].name === pup) {
          dogMap[dog].room = room;
        }
      }
      setDogs(dogMap);
    }

    const updateRooms = () => {
      let temp = {}
      for (let i = 0; i < rooms.length; i++) {
        temp[rooms[i].name] = rooms[i];
      }

      for (let dog in dogs) {
        if (dogs[dog].room !== 'none') {
          temp[dogs[dog].room].dogs.push(dogs[dog]);
        }
      }

      let newRooms = [];
      for (let room in temp) {
        newRooms.push(temp[room]);
      }

      setRooms(newRooms);
    }


  


  return (
    <>
      <Container>
        <h2>Rooms</h2>
        <Row>
          <CardDeck>
            {rooms.map(room => (
                <Rooms addDog={addDog} dogs={dogs} room={room}/>
            ))}
          </CardDeck>
        </Row>
      </Container>
    </>  
  )        
}

export default RoomScreen

