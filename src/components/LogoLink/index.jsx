import * as Styled from "./styles";
import P from "prop-types";
import { Heading } from "../Heading";

export function LogoLink({ text, srcImg = "", link }) {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {srcImg ? <img src={srcImg} alt={text} /> : text}
      </Styled.Container>
    </Heading>
  );
}

LogoLink.propTypes = {
  text: P.string.isRequered,
  srcImg: P.string,
  link: P.string.isRequired
};
