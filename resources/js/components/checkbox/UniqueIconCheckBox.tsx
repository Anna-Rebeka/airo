import React, {FunctionComponent, useEffect, useState} from "react";
import {IconImg, IconLabel, IconWrapper} from "./IconCheckBox";

interface Props {
    label: string;
    id: string;
    value: any;
    setValue: any;
    icon: any;
    isChecked: boolean;
    className?: string;
}

export const IconCheckBox: FunctionComponent<Props> = ({isChecked, label, id, value, setValue, icon, className}) => {

    useEffect(() => {
        setVal(value);
    }, [value])

    const [val, setVal] = useState<boolean>();

    return (
        <IconWrapper isChecked={isChecked} className={className} onClick={(e) => {
            setValue(!value);
        }}>
            <IconImg src={icon}/>
            <IconLabel>{label}</IconLabel>
        </IconWrapper>
    );
}

export default IconCheckBox;
