import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {MAP_PREFERENCES} from "../images";

interface Props {
    preferences: any;
}

let Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

let Preference = styled.img`
    width: 10px;
    height: 10px;
    background-color: white;
    margin: 0.1em;

    @media (min-width: 476px) {
        width: 12px;
        height: 12px;
    };

    @media (min-width: 800px) {
        width: 14px;
        height: 14px;
    };
`

export const RoundTripAttributePreferences: FunctionComponent<Props> = ({preferences}) => {


    return (
        <Wrapper>
            {preferences && preferences.map((preference: any, index: number) => (
                preference.name === "Direct flight" ? null :
                    <Preference key={"pref-" + index + preference.name} src={MAP_PREFERENCES[preference.name].default}
                                title={preference.name}/>
            ))}
        </Wrapper>
    );
}
