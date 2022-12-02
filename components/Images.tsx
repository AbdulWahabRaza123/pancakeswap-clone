import styled from "styled-components";
import Image from "react-bootstrap/Image";
import { ImageProps } from "./PropsInterface";
const ImageCompStyle = styled.span``;
export function ImageComp(props: ImageProps) {
  return (
    <>
      <Image
        className={props.className}
        style={props.style}
        width={props.width}
        height={props.height}
        fluid={props.fluid}
        src={props.src}
        alt={props.alt}
      />
    </>
  );
}
