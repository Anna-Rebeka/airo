import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
    icon: any;
    label: any;
}

let Attribute = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
`

let AttributeIcon = styled.img`
    margin: 0.1em;
    width: 18px;
    height: 18px;
    background-color: transparent;
`

let AttributeValue = styled.span`
    color: white;
    font-size: 0.9em;
    font-weight: bold;
    text-decoration: underline;
`


export const FlightTripAttributeCityNameSimplified: FunctionComponent<Props> = ({
                                                                          icon,
                                                                          label
                                                                      }) => {
    return (
        <Attribute>
            <AttributeIcon src={icon.default}/>
            <AttributeValue>{label}</AttributeValue>
        </Attribute>
    );
}
