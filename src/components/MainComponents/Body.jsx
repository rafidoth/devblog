import React from "react";
import styled from "styled-components";
import Container from "../Container";
import List from "./List";


const BodyStyled = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
`;



const Body = () =>{
    return (
        <Container>
            <BodyStyled>
                <List/>
            </BodyStyled>
        </Container>
    )
}

export default Body;