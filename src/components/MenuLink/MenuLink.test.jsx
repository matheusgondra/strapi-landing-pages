import { screen } from "@testing-library/react";
import { MenuLink } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<MenuLink />", () => {
  it("should render a link", () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);

    expect(screen.getByRole("link", { name: "Children" })).toHaveAttribute(
      "target",
      "_self"
    );
  });

  it("should render open in a new tab", () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab>
        Children
      </MenuLink>
    );

    expect(screen.getByRole("link", { name: "Children" })).toHaveAttribute(
      "target",
      "_blank"
    );
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(
      <MenuLink link="http://localhost">Children</MenuLink>
    );

    expect(container.firstChildren).toMatchInlineSnapshot(`undefined`);
  });
});
