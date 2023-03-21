import { screen } from "@testing-library/react";
import { TextComponent } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<TextComponent />", () => {
  it("should render", () => {
    renderTheme(<TextComponent>Children</TextComponent>);

    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(
      <TextComponent>Um texto qualquer</TextComponent>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
