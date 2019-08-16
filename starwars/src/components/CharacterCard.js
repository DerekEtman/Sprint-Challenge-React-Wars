import React from "react";
import { Card } from 'semantic-ui-react';

const CharacterCard = props => {
    return(
        <Card className = "char-list" key={props.id}>
            <Card.Content>
            <Card.Header><h2> Name: {props.name}</h2></Card.Header>
            <Card.Meta><p>Birth Year: {props.birth_year}</p></Card.Meta>
            <Card.Description>
            <p>Gender: {props.gender}</p>     
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            </Card.Description>

            </Card.Content>
        </Card>
    )
}

export default CharacterCard;