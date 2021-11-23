import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";


interface Props {
    src: any;
    alt: string;
    className?: string;
}

let CarouselImgOpacityImg = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1s linear;
`;


export const ImageComponent: FunctionComponent<Props> = ({
                                                          src,
                                                          alt,
                                                          className,
                                                          children
                                                      }) => {
    return (
        <CarouselImgOpacityImg className={className} src={src} alt={alt}>
            {children}
        </CarouselImgOpacityImg>
    );
}
