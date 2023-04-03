import { GridTwoColumn } from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import mock from ".";

describe("<GridTwoColumn />", () => {
  it("should render grid two colomn", () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
