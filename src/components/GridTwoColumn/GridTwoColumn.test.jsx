import { GridTwoColumn } from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

describe("<GridTwoColumn />", () => {
  it("should render", () => {
    renderTheme(<GridTwoColumn>Children</GridTwoColumn>);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
