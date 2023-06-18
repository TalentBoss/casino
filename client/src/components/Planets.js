import React, {useEffect, useState} from "react";
const Planets = ( ) => {
  const [planets, setPlanets] = useState([]);

  const getAllPlanets = async () => {
    const response = await fetch('https://swapi.dev/api/planets/', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    });
    return await response.json();
  }

  const renderItem = (index, { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population }) => {
    return (
      <tr>
        <td>{ name }</td>
        <td>{ rotation_period }</td>
        <td>{ orbital_period }</td>
        <td>{ diameter }</td>
        <td>{ climate }</td>
        <td>{ gravity }</td>
        <td>{ terrain }</td>
        <td>{ surface_water }</td>
        <td>{ population }</td>
      </tr>
    );
  }

  useEffect(() => {
    getAllPlanets().then(data => {
      setPlanets(data.results);
    });
  })
  return (
    <div className="container">
      Planets

      <table id="characters">
        <thead>
        <tr>
          <th>Name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
        </tr>
        </thead>
        <tbody>
        {
          planets.map((item, id) =>
            renderItem(id, item)
          )
        }
        </tbody>
      </table>
      {planets.length === 0 ? (<img src="/loading.gif" alt="loading" style={{marginLeft: '48%'}} />) : ''}
    </div>
  )
}
export default Planets;

