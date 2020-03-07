import React from 'react';

function Astronaut(props) {
  return (
    <>
      <h3>{props.name} - on board {props.craft}</h3>
    </>
  );
}

export default Astronaut;