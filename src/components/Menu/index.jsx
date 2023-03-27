import * as Styled from "./styles";
import P from "prop-types";
import { SectionContainer } from "../SectionContainer";
import { LogoLink } from "../LogoLink";
import { NavLinks } from "../NavLinks";

export function Menu({ links = [], logoData }) {
  return (
    <Styled.Container>
      <SectionContainer>
        <Styled.MenuContainer>
          <LogoLink {...logoData} />
          <NavLinks links={links} />
        </Styled.MenuContainer>
      </SectionContainer>
    </Styled.Container>
  );
}

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired
};
