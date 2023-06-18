import React, {useEffect, useState} from "react";
/*import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCharacters } from '../actions/characters';*/
const Spaceships = ( ) => {
  const [spaceships, setSpaceships] = useState([]);
  const getAllSpaceships = async () => {
    const response = await fetch('https://swapi.dev/api/starships/', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    });
    return await response.json();
  }

  const renderItem = (index, { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, hyperdrive_rating, MGLT, starship_class }) => {
    return (
      <tr>
        <td>{ name }</td>
        <td>{ model }</td>
        <td>{ manufacturer }</td>
        <td>{ cost_in_credits }</td>
        <td>{ length }</td>
        <td>{ max_atmosphering_speed }</td>
        <td>{ crew }</td>
        <td>{ passengers }</td>
        <td>{ cargo_capacity }</td>
        <td>{ consumables }</td>
        <td>{ hyperdrive_rating }</td>
        <td>{ MGLT }</td>
        <td>{ starship_class }</td>
      </tr>
    );
  }

  useEffect(() => {
    getAllSpaceships().then(data => {
      setSpaceships(data.results);
    });
  })
  return (
    <div className="container">
      SpaceShips
      <table id="characters">
        <thead>
        <tr>
          <th>Name</th>
          <th>Model</th>
          <th>Manufacturer</th>
          <th>Cost in Credits</th>
          <th>length</th>
          <th>max_atmosphering_speed</th>
          <th>crew</th>
          <th>passengers</th>
          <th>cargo_capacity</th>
          <th>consumables</th>
          <th>hyperdrive_rating</th>
          <th>MGLT</th>
          <th>starship_class</th>
        </tr>
        </thead>
        <tbody>
        {
          spaceships.map((item, id) =>
            renderItem(id, item)
          )
        }
        </tbody>
      </table>
      {spaceships.length === 0 ? (<img src="/loading.gif" alt="loading" style={{marginLeft: '48%'}} />) : ''}
    </div>
  )
}

/*Characters.propTypes = {
  getCharacter: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};*/

/*const mapStateToProps = (state) => ({
  profile: state.character
});*/
//export default connect(mapStateToProps, { getCharacters })(Characters);
export default Spaceships;

