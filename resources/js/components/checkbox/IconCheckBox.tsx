import React, {FunctionComponent, useEffect, useState} from "react";
import styled from "@emotion/styled";

interface Props {
    label: string;
    id: string;
    value: any;
    setValue: any;
    icon: any;
    className?: string;
}

export const IconWrapper = styled.div<{ isChecked: boolean }>`
    background-color: ${p => p.isChecked? "white" : "grey"};
    cursor: pointer;
    width: 68px;
    height: 68px;
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

export const IconLabel = styled.span`
    color: black;
    text-align: center;
`;

export const IconImg = styled.img`
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

export const IconCheckBox: FunctionComponent<Props> = ({label, id, value, setValue, icon, className}) => {

    useEffect(() => {
        setVal(value);
    }, [value])

    const [val, setVal] = useState<boolean>(value);

    return (
        <IconWrapper isChecked={val} className={className} onClick={(e) => {
            setValue(!value);
        }}>
            <IconImg src={icon}/>
            <IconLabel>{label}</IconLabel>
        </IconWrapper>
    );
}

export default IconCheckBox;
