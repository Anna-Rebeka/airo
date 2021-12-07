import React, {FunctionComponent} from "react";
import {NavigationImpl} from "../navigation/NavigationImpl";
import {FooterImpl} from "../footer/FooterImpl";

interface Props {
    dataset: any;
}


export const ContactsImpl: FunctionComponent<Props> = ({
                                                           dataset,
                                                           children
                                                       }) => {
    return (
        <div id={"contacts"}>
            <NavigationImpl setUser={null} user={JSON.parse(dataset.user)}/>

            <FooterImpl/>
        </div>
    )
}
