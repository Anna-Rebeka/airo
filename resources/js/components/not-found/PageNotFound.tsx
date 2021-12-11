import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {

}

let PageNotFoundDiv = styled.div`
    width: 100%;
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    vertical-align: center;
    font-size: 2em;
    background-color: black;
`;

let Img = styled.img`
    height: 60px;
`

let RegistrationButton = styled.button`
    text-decoration: none;
    border: 0.1em solid white;
    color: white;
    font-size: 0.4em;
    cursor: pointer;
    background-color: transparent;
    padding: 0.5rem 1rem;
    font-weight: bold;
    text-shadow: 0 5px 8px black;

    margin-top: 0.4em;

    :hover {
        color: #FF7F2A;
        border: 0.1em solid #FF7F2A;
    }

    @media (min-width: 772px) {
        font-size: 0.6em;
    }

    @media (min-width: 992px) {
        font-size: 0.8em;
    }

    @media (min-width: 1280px) {
        font-size: 1.0em;
    }

    @media (min-width: 1920px) {
        font-size: 1.2em;
    }
    transition: background-color 0.2s, color 0.3s;
`;


export const PageNotFound: FunctionComponent<Props> = () => {
    return (
        <PageNotFoundDiv>
            <Img src={require("../../airplane.svg").default} alt={"logo"}/>
            <p>Page does not exist.</p>
            <RegistrationButton onClick={() => window.location.href = "/"}>Home</RegistrationButton>
        </PageNotFoundDiv>
    );
}
