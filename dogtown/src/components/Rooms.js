import React from 'react'
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../css/Rooms.css'


const Rooms = (props) => {
  const addADog = (e) => {
    e.preventDefault()
    props.addDog(e.target.title, props.room.name)
  }


  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.room.image} />
        <Card.Body>
          <Card.Title>{props.room.name}</Card.Title>
          <Card.Text>
            This room can hold {props.room.occupancy} dogs
          </Card.Text>
          <Card.Text>
            {props.room.dogs.map(dog => (<li>{dog.name} - {dog.keyCareInfo}</li>))}
          </Card.Text>
          <DropdownButton id="dropdown-basic-button" title="Add a Dog">
          {Object.keys(props.dogs).map(dog =>(<Dropdown.Item title={dog} onClick={addADog}>{dog}</Dropdown.Item>))}
          </DropdownButton>
        </Card.Body>
      </Card>
    </>
  )
}

export default Rooms
