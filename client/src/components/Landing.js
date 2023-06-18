import React from 'react';
import { Button } from "antd";

const Landing = ({ isAuthenticated }) => {

  const getAllCharacters = () => {
    window.location.href = "/characters";
  }
  const getAllPlanets = () => {
    window.location.href = "/planets";
  }
  const getAllSpaceships = () => {
    window.location.href = "/spaceships";
  }

  return (
    <section className="container">
      Landing
      <Button type="primary" onClick={() => getAllCharacters()}>Characters</Button>
      <Button type="primary" onClick={() => getAllPlanets()}>Planets</Button>
      <Button type="primary" onClick={() => getAllSpaceships()}>SpaceShips</Button>
    </section>
  )
}

export default Landing;
