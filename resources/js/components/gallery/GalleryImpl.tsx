import React, {FunctionComponent} from "react";
import {NavigationImpl} from "../navigation/NavigationImpl";
import {FooterImpl} from "../footer/FooterImpl";
import {ImageGridFlexboxImpl} from "./ImageGridFlexboxImpl";

interface Props {

}


export const GalleryImpl: FunctionComponent<Props> = ({
                                                          children
                                                      }) => {
    return (
        <div id={"gallery"}>
            <NavigationImpl/>
            <ImageGridFlexboxImpl
                images={[require("../../../../public/images/cities/bratislava.jpg"), require("../../../../public/images/cities/default.jpg"),
                    require("../../../../public/images/cities/newyork.jpg"), require("../../../../public/images/cities/paris.jpg"), require("../../../../public/images/cities/praha.jpg")
                    , require("../../../../public/images/cities/tokyo.jpg"), require("../../../../public/images/cities/rome.jpg")]}/>
            <FooterImpl/>
        </div>
    )
}
