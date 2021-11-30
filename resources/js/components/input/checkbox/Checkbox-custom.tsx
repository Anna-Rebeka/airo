import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
    label: string;
    id: string;
}

let MyCBWrapper = styled.div`
    .myCheckbox
    {
        appearance: none;
        background-color: rgba(134, 134, 122, 0.25);
        margin: 5px;
        font-size: 18px;
        width: 18px;
        height: 18px;
        color: currentColor;
        border: 3px solid orange;
        border-radius: 2px;
        transform: translateY(-0.075em);
        cursor: pointer;
    }

    .myLabel
    {
        color: white;
        margin-left: 5px;
        position: relative;
        top: -11px;
        cursor: pointer;
    }

    .myCheckbox:hover
    {
        background-color: orange;
        border: none;
    }
    .myCheckbox:checked { background-color: orange; }
    .myCheckbox:checked + .myLabel:after
    {
        content: '\\2713';
        text-align: left;
        left: -27px;
        top: -2px;
        opacity: 1;
        width: 100%;
        hegiht: 100%;
        color: white;
        border: none;
        position: absolute;
        font-family: 'Consolas';
    }
`;

export const MyCheckbox: FunctionComponent<Props> = ({label, id}) =>
{
    return (
        <MyCBWrapper>
                <input type="checkbox" className="myCheckbox" id={id} name={id}/>
                <label htmlFor={id} className="myLabel">{label}</label>
        </MyCBWrapper>
    );
}

export default MyCheckbox;
