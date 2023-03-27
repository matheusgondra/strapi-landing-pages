import * as Styled from "./styles";
import P from "prop-types";
import { SectionContainer } from "../SectionContainer";

export function SectionBackground({ children, background = false }) {
  return (
    <Styled.Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
}

SectionBackground.propTypes = {
  children: P.node.isRequered,
  background: P.bool
};
