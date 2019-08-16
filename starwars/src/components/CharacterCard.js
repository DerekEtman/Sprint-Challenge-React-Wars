import React from "react";
import { Card } from 'semantic-ui-react';
import styled from "styled-components";

const StarH2 = styled.h2`
color:aqua;
`;

const Styledcard = styled.div `

background-color: #d7c078;
border: 1px solid #5f9fdd;
width: 400px;
margin: 2rem auto;
padding: 2%;
border-radius: 20px;
`;


const CharacterCard = props => {

    return(
        <Card className = "char-list" key={props.id}>
            <Styledcard>
                <Card.Content>
                    <Card.Header><StarH2>{props.name}</StarH2></Card.Header>
                    <Card.Meta><p>Birth Year: {props.birth_year}</p></Card.Meta>
                    <Card.Description>
                    <p>Gender: {props.gender}</p>     
                    <p>Height: {props.height}</p>
                    <p>Mass: {props.mass}</p>
                    <button onClick="window.location.href='{props.home_world}'">Home: {props.home_world}</button>
                    </Card.Description>
                    {/* <Card.Description>
                        Films: {props}
                    </Card.Description> */}
                </Card.Content>
            </Styledcard>
        </Card>
    )
}

export default CharacterCard;