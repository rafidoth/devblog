import React from "react";
import styled from "styled-components";
import Container from "./Container";

const NavStyled = styled.div`
    height: 50px;
    width: 100%;
    background-color: black;
    color: white;
`; 


const Nav = ()=>{
    return(
        <NavStyled>
            <Container>
                <h1>
                    hello
                </h1>
            </Container>
        </NavStyled>
    );
}

export default Nav;