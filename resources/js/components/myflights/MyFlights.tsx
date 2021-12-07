import React, {FunctionComponent} from "react";
import {NavigationImpl} from "../navigation/NavigationImpl";
import {FooterImpl} from "../footer/FooterImpl";

interface Props {
    dataset: any;
}


export const MyFlights: FunctionComponent<Props> = ({
                                                          children
                                                      }) => {
    return (
        <div id={"gallery"}>
            <NavigationImpl/>

            <FooterImpl/>
        </div>
    )
}
