import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {ImageGridFlexboxImg} from "./ImageGridFlexboxImg";

interface ImageGridFlexboxImplProps {
    images: Array<any>;
    className?: string;
    classNameImg?: string;
    setSelectedImg?: ((url: string | null) => void);
    children?: React.ReactNode;
}

let ImageGridFlexboxImplDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

let Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    background-image: linear-gradient(0deg, #000000 0%, #404040 100%);
`

export const ImageGridFlexboxImpl: FunctionComponent<ImageGridFlexboxImplProps> = ({
                                                                                       images,
                                                                                       className,
                                                                                       children
                                                                                   }) => {
    return (
        <Wrapper>
            <ImageGridFlexboxImplDiv className={className}>
                {images && Object.values(images).map((image: any, index: number) => (
                    <ImageGridFlexboxImg key={"img-gallery-" + index} image={image.url}/>
                ))}
            </ImageGridFlexboxImplDiv>
            {children}
        </Wrapper>
    );
}
