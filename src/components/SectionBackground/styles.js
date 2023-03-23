import styled, { css } from "styled-components";

const containerBackgroundActive = (theme) => css`
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && containerBackgroundActive(theme)}
  `}
`;
