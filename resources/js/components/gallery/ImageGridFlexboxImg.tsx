import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface ImageGridFlexboxProps {
    image: any;
    className?: string;
}

let ImageGridFlexboxImgElement = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
  box-shadow: 2px 3px 8px 1px rgba(22, 23, 24, 0.8);

  @media (min-width: 992px) {
    width: 50%;
  }

  @media (min-width: 1280px) {
    width: 33.33333%;
  }

  @media (min-width: 1920px) {
    width: 25%;
  }

  @media (min-width: 2560px) {
    width: 12.5%;
  }
`;


export const ImageGridFlexboxImg: FunctionComponent<ImageGridFlexboxProps> = ({image, className}) => {
    return (
        <ImageGridFlexboxImgElement src={image.default} alt={"gallery image"} className={className}/>
    );
}
