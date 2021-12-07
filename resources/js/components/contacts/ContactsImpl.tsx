import React, {FunctionComponent} from "react";
import {NavigationImpl} from "../navigation/NavigationImpl";
import {FooterImpl} from "../footer/FooterImpl";

interface Props {

}


export const ContactsImpl: FunctionComponent<Props> = ({
                                                           children
                                                       }) => {
    return (
        <div id={"contacts"}>
            <NavigationImpl/>

            <FooterImpl/>
        </div>
    )
}
