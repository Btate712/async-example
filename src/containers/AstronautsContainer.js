import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAstronauts } from '../actions/astronautActions.js';
import AstronautList from '../components/AstronautList';

class AstronautsContainer extends Component {
  componentDidMount() {
    this.props.getAstronauts();
  }
  
  render() {
    return (
      <>
        <h1>Astronauts Currently In Space:</h1>
        {this.props.astronauts.loading ? (<h3>Loading...</h3>) : (<AstronautList astronauts={this.props.astronauts} />) }
      </>
    );
  }
}

const mapStateToProps = state => {
  return ({
    astronauts: state.astronauts
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    getAstronauts: () => dispatch(getAstronauts())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(AstronautsContainer);