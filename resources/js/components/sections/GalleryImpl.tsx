import React, {FunctionComponent, useEffect, useState} from "react";
import {ImageGridFlexboxImpl} from "../gallery/ImageGridFlexboxImpl";
import BasicImpl from "./BasicImpl";

interface Props {
    images: any;
    dataset: any;
}

export const GalleryImpl: FunctionComponent<Props> = ({
                                                          dataset,
                                                          images
                                                      }) => {
    const [user, setUser] = useState<any>();


    useEffect(() => {
        setUser(JSON.parse(dataset.user));
    }, [dataset])

    return (
        <BasicImpl user={user} setUser={setUser} id={"gallery"}>
            <ImageGridFlexboxImpl images={images}/>
        </BasicImpl>
    )
}
