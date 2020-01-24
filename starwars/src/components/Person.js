import React from 'react'; 
import styled from 'styled-components'

const IndCard = styled.div`
    background-image: url(starwars.jpg)
    width: 20%;
    margin: 1%;
    padding: 1%;
    border-radius: 20px;
    height: 20vh;
    color: white;
`
const H2 = styled.div`
    font-size: 20px;
`
const H1 = styled.div`
    font-size: 30px;
`
const Person = props => {
    console.log(props);
    return(
        <div className = "card">
        <IndCard> 
          <H1>{props.data.name}</H1>
          <H2>Gender: {props.data.gender}</H2>
          <H2>Eye Color: {props.data.eye_color}</H2>
          <H2>Skin Color: {props.data.skin_color}</H2>
        </IndCard>
        </div>
    )
}
export default Person;