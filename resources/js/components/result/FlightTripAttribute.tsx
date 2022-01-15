import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
    icon: any;
    label: any;
}

let Attribute = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

let AttributeIcon = styled.img`
    margin: 0.3em;
    width: 24px;
    height: 24px;
    background-color: transparent;
`

let AttributeValue = styled.span`
    color: white;
    font-size: 0.7em;
`


export const FlightTripAttribute: FunctionComponent<Props> = ({
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
