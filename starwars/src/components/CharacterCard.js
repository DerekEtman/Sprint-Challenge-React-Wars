import React from "react";
import { Card } from 'semantic-ui-react';
import styled from "styled-components";

const StarH2 = styled.h2`
color:white;
`;

const Styledcard = styled.div `

background-color: #d7c078;
border: 1px solid #5f9fdd;
width: 400px;
margin: 2rem auto;


`;

const CharacterCard = props => {

    return(
        <Card className = "char-list" key={props.id}>
            <Styledcard>
                <Card.Content>
                    <Card.Header><StarH2> Name: {props.name}</StarH2></Card.Header>
                    <Card.Meta><p>Birth Year: {props.birth_year}</p></Card.Meta>
                    <Card.Description>
                    <p>Gender: {props.gender}</p>     
                    <p>Height: {props.height}</p>
                    <p>Mass: {props.mass}</p>
                    <p>Home: {props.home_world}</p>
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