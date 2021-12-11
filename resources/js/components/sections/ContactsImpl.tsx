import React, {FunctionComponent, useEffect, useState} from "react";
import BasicImpl from "./BasicImpl";
import styled from "@emotion/styled";

interface Props {
    dataset: any;
}

let Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    background-image: linear-gradient(0deg, #000000 0%, #404040 100%);
`

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

            </Wrapper>
        </BasicImpl>
    )
}
