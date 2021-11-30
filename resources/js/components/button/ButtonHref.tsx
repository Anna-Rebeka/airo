import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
    className?: string;
    href: string;
    text: string;
}

let ButtonCoreButton = styled.a`
  text-decoration: none;
  border: 2px solid white;
  color: black;
  font-size: 1.05em;
  cursor: pointer;
  background-color: white;
  text-align: center;
  vertical-align: center;
  padding: 0.5rem 1rem;
  margin: 0.4em 0.5em;
  box-shadow: 2px 3px 8px 1px black;

  :hover {
    background-color: black;
    color: white;
  }

  @media (min-width: 772px) {
    font-size: 1.25em;
  }

  @media (min-width: 992px) {
    font-size: 1.30em;
  }

  @media (min-width: 1280px) {
    font-size: 1.35em;
  }

  @media (min-width: 1920px) {
    font-size: 1.40em;
  }


  transition: background-color 0.2s, color 0.3s;
`;


export const ButtonHref: FunctionComponent<Props> = ({text, href, className, children}) => {
    return (
        <ButtonCoreButton href={href && href} className={className}>
            {text && text}
            {children}
        </ButtonCoreButton>
    );
}
