import React from "react";
import Container from "../Container";

const Body = (props) =>{
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default Body;