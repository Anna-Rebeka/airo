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
`;

let Input = styled.input`
`;

let Img = styled.img`
`;

export const PreferencesCheckBox: FunctionComponent<Props> = ({label, id, value, setValue, icon}) => {

    useEffect(() => {
        setVal(value);
    }, [value])

    const [val, setVal] = useState<boolean>();

    return (
        <Wrapper>
            <Input onChange={(e) => {
                setValue(!value);
            }} type="checkbox" className="myCheckbox" id={id} name={id} checked={value}>
                <Img src={icon}/>
            </Input>
            <label htmlFor={id} className="myLabel">{label}</label>
        </Wrapper>
    );
}

export default PreferencesCheckBox;
