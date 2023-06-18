import React, {useEffect, useState} from "react";
import { Button } from "antd";
import { CHARACTER_NAME, CHARACTER_HAIR_COLOR, CHARACTER_SKIN_COLOR, CHARACTER_HEIGHT } from "../actions/types";
import Planets from "./Planets";
const Characters = ( ) => {
  const [characters, setCharacters] = useState([]);
  const [ searchName, setSearchName ] = useState('');
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    getAllCharacters().then(data => {
      setCharacters(data.results);
      setOriginalData(data.results);
      console.log("Ol@f: use Effect get original Data Function called. ", originalData);
    });
  }, []);

  useEffect(() => {
    console.log("ol@f: ", originalData);
    if(originalData.length > 0) {
      setCharacters(
        originalData.filter((item) =>
          item.name.toLowerCase().indexOf(searchName.toLowerCase()) > -1)
      );
      console.log(characters);
    }
  }, [searchName]);

  const getAllCharacters = async () => {
    const response = await fetch('https://swapi.dev/api/people/', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    });
    return await response.json();
  }

  const renderItem = (index, { name, height, mass, hair_color, skin_color }) => {
    return (
      <tr key={index}>
        <td>{ name }</td>
        <td>{ height }</td>
        <td>{ mass }</td>
        <td>{ hair_color }</td>
        <td>{ skin_color }</td>
      </tr>
    );
  }
/*
  const filterCharacters = (fieldType, value) => {
    if (value !== "") {
      setCharacters(
        originalData.filter((item) =>
          item.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
      );
      console.log(characters);
    }
  }
*/

  return (
    <div className="container">
      Characters
      <br />
      <Button type="primary">Search</Button>
      <table id="characters">
        <thead>
          <tr>
            <th>Name<input name="name" value={searchName} onChange={(e) => setSearchName(e.target.value)}/></th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair Color</th>
            <th>Skin Color</th>
          </tr>
        </thead>
        <tbody>
        {
          characters.map((item, id) =>
            renderItem(id, item)
          )
        }
        </tbody>
      </table>
      {characters.length === 0 ? (<img src="/loading.gif" alt="loading" style={{marginLeft: '48%'}} />) : ''}
    </div>
  )
}


export default Characters;

