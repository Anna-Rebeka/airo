import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
    label: string;
    id: string;
}

let Wrapper = styled.div`
    .myCheckbox {
        appearance: none;
        background-color: rgba(134, 134, 122, 0.25);
        margin: 5px;
        font-size: 18px;
        width: 18px;
        height: 18px;
        border: 3px solid #FF7F2A;
        border-radius: 2px;
        transform: translateY(-0.075em);
        cursor: pointer;
    }

    .myLabel {
        color: white;
        margin-left: 5px;
        position: relative;
        top: -11px;
        cursor: pointer;
    }

    .myCheckbox:hover {
        background-color: #FF7F2A;
        border: none;
    }

    .myCheckbox:checked {
        background-color: #FF7F2A;
    }

    .myCheckbox:checked + .myLabel:after {
        content: '\\2713';
        text-align: left;
        left: -25px;
        top: 0;
        opacity: 1;
        width: 100%;
        height: 100%;
        color: white;
        border: none;
        position: absolute;
    }
`;

export const PreferencesCheckBox: FunctionComponent<Props> = ({label, id}) => {
    return (
        <Wrapper>
            <input type="checkbox" className="myCheckbox" id={id} name={id}/>
            <label htmlFor={id} className="myLabel">{label}</label>
        </Wrapper>
    );
}

export default PreferencesCheckBox;
