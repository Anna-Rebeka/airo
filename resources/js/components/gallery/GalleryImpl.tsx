import React, {FunctionComponent} from "react";
import {NavigationImpl} from "../navigation/NavigationImpl";
import {FooterImpl} from "../footer/FooterImpl";
import {ImageGridFlexboxImpl} from "./ImageGridFlexboxImpl";

interface Props {
    images: any;
}


export const GalleryImpl: FunctionComponent<Props> = ({
                                                          images,
                                                          children
                                                      }) => {
    return (
        <div id={"gallery"}>
            <NavigationImpl/>
            <ImageGridFlexboxImpl images={images}/>
            <FooterImpl/>
        </div>
    )
}
