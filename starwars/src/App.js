import React, { useState, useEffect } from 'react';
import './App.css';
import Person from "./components/Person";
import axios from "axios";
import styled from 'styled-components';

const Flex = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
width: 100%;
align-items: center;
padding: 0 10%;
`
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const[people, setPeople] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(
        "https://swapi.co/api/people/"
      )
      .then(response => {
        console.log(response);
        setPeople(response.data.results);
        console.log(people);
      })
      .catch(error => {
        console.log(
          "Data not returned", error
        );
      });
  }, []);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Flex>
      {people.map(person => {
        return (
          <Person
            data={person}
            key={Math.random()}
           />
        )
      })}
      </Flex>
    </div>
  
  );
}

export default App;
