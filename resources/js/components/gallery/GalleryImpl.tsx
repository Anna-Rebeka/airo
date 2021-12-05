import React, {FunctionComponent} from "react";
import {NavigationImpl} from "../navigation/NavigationImpl";
import {FooterImpl} from "../footer/FooterImpl";
import styled from "@emotion/styled";
import {ImageGridFlexboxImpl} from "./ImageGridFlexboxImpl";

interface Props {

}


export const GalleryImpl: FunctionComponent<Props> = ({
                                                          children
                                                      }) => {
    return (
        <>
            <NavigationImpl/>
            <ImageGridFlexboxImpl images={[]}/>
            <FooterImpl/>
        </>
    )
}
