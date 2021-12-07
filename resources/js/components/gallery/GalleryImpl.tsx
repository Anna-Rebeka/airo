import React, {FunctionComponent} from "react";
import {NavigationImpl} from "../navigation/NavigationImpl";
import {FooterImpl} from "../footer/FooterImpl";
import {ImageGridFlexboxImpl} from "./ImageGridFlexboxImpl";

interface Props {
    images: any;
    dataset: any;
    setUser: any;
}


export const GalleryImpl: FunctionComponent<Props> = ({
                                                          setUser,
                                                          dataset,
                                                          images,
                                                          children
                                                      }) => {
    return (
        <div id={"gallery"}>
            <NavigationImpl setUser={setUser} user={JSON.parse(dataset.user)}/>
            <ImageGridFlexboxImpl images={images}/>
            <FooterImpl/>
        </div>
    )
}
