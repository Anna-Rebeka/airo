import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface ImageGridProps {
    title: string;
    className?: string;
    children?: React.ReactNode;
}

let GoogleMapsIFrame = styled.iframe`
    width: 70%;
    height: 50vh;
`

export const GoogleMaps: FunctionComponent<ImageGridProps> = (props) => {
    return (
        <GoogleMapsIFrame
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.354899025437!2d17.03208911617533!3d48.23829527923148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476cf347b345a813%3A0x786373fbf6e41c4b!2sBratislavsk%C3%A1%2047%2C%20841%2006%20Z%C3%A1horsk%C3%A1%20Bystrica!5e0!3m2!1ssk!2ssk!4v1639320451410!5m2!1ssk!2ssk"
            />
    );
}
