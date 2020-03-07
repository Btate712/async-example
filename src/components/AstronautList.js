import React from 'react';
import Astronaut from './Astronaut';

function AstronautList(props) {
  
  const listAstronauts = props.astronauts.people.map((astronaut, index) => {
    return (<Astronaut name={astronaut.name} craft={astronaut.craft} key={index} />);
  });

  return (
    <>
      {listAstronauts}
    </>
  );
}

export default AstronautList;