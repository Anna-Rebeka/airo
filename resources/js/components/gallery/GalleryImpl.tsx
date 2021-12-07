import React, {FunctionComponent} from "react";
import {NavigationImpl} from "../navigation/NavigationImpl";
import {FooterImpl} from "../footer/FooterImpl";
import {ImageGridFlexboxImpl} from "./ImageGridFlexboxImpl";

interface Props {
    images: any;
    dataset: any;
}


export const GalleryImpl: FunctionComponent<Props> = ({
                                                          dataset,
                                                          images,
                                                          children
                                                      }) => {
    return (
        <div id={"gallery"}>
            <NavigationImpl user={JSON.parse(dataset.user)}/>
            <ImageGridFlexboxImpl images={images}/>
            <FooterImpl/>
        </div>
    )
}
