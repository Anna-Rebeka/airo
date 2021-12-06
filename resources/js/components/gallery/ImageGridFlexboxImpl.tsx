import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import useWindowSize from "../../BasicUtils";
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
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageGridFlexboxImpl: FunctionComponent<ImageGridFlexboxImplProps> = ({
                                                                                       images,
                                                                                       className,
                                                                                       classNameImg,
                                                                                       children
                                                                                   }) => {
    const [width] = useWindowSize();
    let documents = images ? width >= 1280 && width < 1920 ? images.slice(0, images.length - 1) : images : [];

    return (
        <Wrapper>
            <ImageGridFlexboxImplDiv className={className}>
                {documents && documents.map((image: any, index:number) => (
                    <ImageGridFlexboxImg key={"img-gallery-" + index} image={image}/>
                ))}
            </ImageGridFlexboxImplDiv>
            {children}
        </Wrapper>
    );
}
