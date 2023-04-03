import { GridTwoColumn } from ".";

export default {
  title: "GridTwoColumn",
  component: GridTwoColumn,
  args: {
    title: "Grid two columns",
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ab vero at quia placeat commodi iusto obcaecati! Fugiat tenetur cupiditate itaque adipisci, molestiae saepe, nisi maiores fuga quas fugit illo.`,
    srcImg: "assets/images/javascript.svg"
  },
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
