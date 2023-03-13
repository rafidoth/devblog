import React from "react";
import styled from "styled-components";
import Container from "./Container";
import CenterizeXY from "./UI/CenterizeXY";

const NavStyled = styled.div`
    height: 50px;
    width: 100%;
    background-color: black;
    color: white;
    display:flex;
    align-items: center;
    justify-content: center;
`; 


const Nav = ()=>{
    return(
        <NavStyled>
            <Container >
                <CenterizeXY>
                    <h1>
                        Rafiul Hasan
                    </h1>
                </CenterizeXY>
            </Container>
        </NavStyled>
    );
}

export default Nav;