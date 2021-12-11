import styled from "@emotion/styled";
import React, {FunctionComponent} from "react";
import {NavigationImpl} from "../navigation/NavigationImpl";
import {ScrollTopElementButton} from "../scroll/ScrollTopElementButton";
import {FooterImpl} from "../footer/FooterImpl";


interface RootProps {
    user: any;
    setUser: any;
    id: string;
}

let BackgroundWrapper = styled.div`
    background-color: #000000;
    background-image: linear-gradient(0deg, #000000 0%, #404040 100%);
    min-height: 100vh;
`


const BasicImpl: FunctionComponent<RootProps> = ({id, children, user, setUser}) => {
    return (
        <BackgroundWrapper id={id}>
            <NavigationImpl user={user} setUser={setUser}/>
            {children}
            <ScrollTopElementButton/>
            <FooterImpl/>
        </BackgroundWrapper>
    );
}

export default BasicImpl;
