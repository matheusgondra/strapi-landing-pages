import { SectionContainer } from ".";

export default {
  title: "SectionContainer",
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          architecto temporibus dolore, eos ipsa recusandae qui ipsum iure
          voluptatem, aperiam perferendis ipsam blanditiis distinctio commodi
          repudiandae enim facilis ex. Fugit?
        </p>
      </div>
    )
  },
  argTypes: {
    children: { type: "" }
  }
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
