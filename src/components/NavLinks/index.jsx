import * as Styled from "./styles";
import P from "prop-types";
import { MenuLink } from "../MenuLink";

export function NavLinks({ links = [] }) {
  return (
    <Styled.Container>
      {links.map((link) => (
        <MenuLink key={link} {...link} />
      ))}
    </Styled.Container>
  );
}

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      link: P.string,
      children: P.string.isRequired,
      newTab: P.bool
    })
  ).isRequired
};
