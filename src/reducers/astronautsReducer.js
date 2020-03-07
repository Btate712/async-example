const astronautsReducer = (state = { people: [], loading: false }, action) => {
  switch (action.type) {
    case 'GET_ASTRONAUTS':
      return {
        ...state,
        loading: true
      }
    case 'ADD_ASTRONAUTS':
      return {
        ...state,
        people: action.payload.people,
        loading: false
      }
    default:
      return {
        ...state
      }
    }
  }

export default astronautsReducer;