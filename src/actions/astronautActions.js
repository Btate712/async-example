export function getAstronauts() {
  return dispatch => { 
    dispatch({ type: 'GET_ASTRONAUTS' });
    setTimeout(() => {
      fetch("http://api.open-notify.org/astros.json")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'ADD_ASTRONAUTS', payload: json })
      });

    }, 1500)
  };
}