import React from "react";
import styled from "styled-components";



const ContainerStyled = styled.div`
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
    background-color: red;
`;

const Container = (props) =>{
    return(
        <div>
            <ContainerStyled>
                {props.children}
            </ContainerStyled>
        </div>
    );
}

export default Container;