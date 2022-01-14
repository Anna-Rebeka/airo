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
    width: 72px;
    height: 72px;
    font-size: 0.8em;
    margin: 0.4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 476px) {
        width: 82px;
        height: 82px;
        margin: 0.5em;
        font-size: 1em;
    };

    @media (min-width: 800px) {
        width: 92px;
        height: 92px;
        margin: 0.6em;
        font-size: 1.2em;
    };
`;

let Label = styled.span`
    color: black;
    text-align: center;
`;

let Img = styled.img`
    width: 26px;
    height: 26px;

    @media (min-width: 476px) {
        width: 32px;
        height: 32px;
    };

    @media (min-width: 800px) {
        width: 36px;
        height: 36px;
    };
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
