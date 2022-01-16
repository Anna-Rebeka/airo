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
    width: 14px;
    height: 14px;
    background-color: transparent;
`

let AttributeValue = styled.span`
    color: white;
    font-size: 0.7em;
`


export const RoundTripAttributeSimplified: FunctionComponent<Props> = ({
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
