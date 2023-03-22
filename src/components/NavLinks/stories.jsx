import { NavLinks } from ".";
import links from "./mock";

export default {
  title: "NavLinks",
  component: NavLinks,
  args: {
    links: links
  },
  argTypes: { type: "" }
};

export const Template = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
