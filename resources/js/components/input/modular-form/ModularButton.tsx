import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
    text: string;
    type: any;
    id: string;
    name: string;
    value: string;
    setOnClickValueMethod: any;
}

let ModularButtonBtn = styled.button`
    text-decoration: none;
    border: 0.1em solid white;
    color: white;
    font-size: 1.2em;
    cursor: pointer;
    background-color: transparent;
    padding: 0.5rem 1rem;
    font-weight: bold;
    text-shadow: 0 5px 8px black;

    margin: 0.4em;

    :hover {
        color: #FF7F2A;
        border: 0.1em solid #FF7F2A;
    }

    @media (min-width: 772px) {
        font-size: 1.4em;
    }

    @media (min-width: 992px) {
        font-size: 1.6em;
    }

    @media (min-width: 1280px) {
        font-size: 1.8em;
    }

    @media (min-width: 1920px) {
        font-size: 2em;
    }
    transition: background-color 0.2s, color 0.3s;
`;

export const ModularButton: FunctionComponent<Props> = ({
                                                            text,
                                                            id,
                                                            setOnClickValueMethod,
                                                            value,
                                                            type,
                                                            name,
                                                            children
                                                        }) => {


    return (
        <ModularButtonBtn name={name} onClick={setOnClickValueMethod} id={id} value={value} type={type}>
            {text}
            {children}
        </ModularButtonBtn>
    );
}
