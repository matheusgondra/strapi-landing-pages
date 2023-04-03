import { GridTwoColumn } from ".";
import mock from "./mock";

export default {
  title: "GridTwoColumn",
  component: GridTwoColumn,
  args: mock,
  argTypes: {
    title: { type: "string" },
    text: { type: "string" },
    srcImg: { type: "string" }
  }
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
