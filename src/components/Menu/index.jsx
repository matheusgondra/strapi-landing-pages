import * as Styled from "./styles";
import P from "prop-types";
import { SectionContainer } from "../SectionContainer";
import { LogoLink } from "../LogoLink";
import { NavLinks } from "../NavLinks";
import { Menu as MenuIcon } from "@styled-icons/material-outlined/Menu";
import { Close as CloseIcon } from "@styled-icons/material-outlined/Close";
import { useState } from "react";

export function Menu({ links = [], logoData }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button
        onClick={() => setVisible(true)}
        visible={visible}
        aria-label="Open/Close menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container onClick={() => setVisible(false)} visible={visible}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
}

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired
};
