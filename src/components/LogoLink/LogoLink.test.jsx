import { LogoLink } from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

describe("<LogoLink />", () => {
  it("should render text logo", () => {
    renderTheme(<LogoLink link="#target" text="Olá Mundo" />);

    const heading = screen.getByRole("heading", { name: "Olá Mundo" });
    const link = screen.getByRole("link", { name: "Olá Mundo" });

    expect(heading).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#target");
  });

  it("should render image logo", () => {
    renderTheme(
      <LogoLink link="#target" text="Olá Mundo" srcImg="image.jpg" />
    );

    const image = screen.getByRole("img", { name: "Olá Mundo" });

    expect(image).toHaveAttribute("src", "image.jpg");
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá Mundo" srcImg="image.jpg" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
