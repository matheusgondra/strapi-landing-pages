import * as Styled from "./styles";
import P from "prop-types";

export function SectionContainer({ children }) {
  return <Styled.Container>{children}</Styled.Container>;
}

SectionContainer.propTypes = {
  children: P.node.isRequered
};
