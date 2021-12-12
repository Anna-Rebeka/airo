import React, {FunctionComponent, useEffect, useState} from "react";
import BasicImpl from "./BasicImpl";
import styled from "@emotion/styled";
import {GoogleMaps} from "../map/GoogleMap";
import {Heading1} from "../heading/Heading1";
import {Heading2} from "../heading/Heading2";

interface Props {
    dataset: any;
}

let Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000000;
    background-image: linear-gradient(0deg, #000000 0%, #404040 100%);
`

let ContactComponent = styled.address`
    width: 100%;
    text-align: center;
    color: white;
    font-size: 1.4em;
    margin-bottom: 1em;

    @media (min-width: 476px) {
        width: 25%;
    }
`;

export const ContactsImpl: FunctionComponent<Props> = ({
                                                           dataset,
                                                           children
                                                       }) => {
    const [user, setUser] = useState<any>();


    useEffect(() => {
        setUser(JSON.parse(dataset.user));
    }, [dataset])
    return (
        <BasicImpl user={user} setUser={setUser} id={"contacts"}>
            <Wrapper>
                <Heading1>Contacts</Heading1>
                <Heading2>You can find us on</Heading2>
                <ContactComponent>
                    Airline search engine plus<br/>
                    Bratislavská 47<br/>
                    Bratislava<br/>
                </ContactComponent>
                <GoogleMaps title={"Map"}/>
            </Wrapper>
        </BasicImpl>
    )
}
