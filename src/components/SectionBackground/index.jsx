import * as Styled from "./styles";
import P from "prop-types";

export function SectionBackground({ children, background = false }) {
  return (
    <Styled.Container background={background}>{children}</Styled.Container>
  );
}

SectionBackground.propTypes = {
  children: P.node.isRequered,
  background: P.bool
};
