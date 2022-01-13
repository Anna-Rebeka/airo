import React, {FunctionComponent, useEffect, useState} from "react";
import styled from "@emotion/styled";

interface Props {
    label: string;
    id: string;
    value: any;
    setValue: any;
    icon: any;
}

let Wrapper = styled.div`
    background-color: white;
    cursor: pointer;
    width: 82px;
    height: 82px;
    margin: 0.4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

let Label = styled.span`
    color: black;
    text-align: center;
`;

let Img = styled.img`
    width: 32px;
    height: 32px;
`;

export const IconCheckBox: FunctionComponent<Props> = ({label, id, value, setValue, icon}) => {

    useEffect(() => {
        setVal(value);
    }, [value])

    const [val, setVal] = useState<boolean>();

    return (
            <Wrapper onClick={(e) => {
                setValue(!value);
            }}>
                <Img src={icon}/>
                <Label>{label}</Label>
            </Wrapper>
    );
}

export default IconCheckBox;
