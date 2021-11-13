import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";


interface Props {
    src: any;
    alt: string;
    fullOpacity: boolean;
    className?: string;
}

let CarouselImgOpacityImg = styled.img<{ fullOpacity: boolean; }>`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: ${p => p.fullOpacity ? 1 : 0};
    transition: opacity 1s linear;
`;


export const CarouselImg: FunctionComponent<Props> = ({
                                                          src,
                                                          alt,
                                                          fullOpacity,
                                                          className,
                                                          children
                                                      }) => {
    return (
        <CarouselImgOpacityImg fullOpacity={fullOpacity} className={className} src={src} alt={alt}>
            {children}
        </CarouselImgOpacityImg>
    );
}
