import { SectionBackground } from ".";
import { SectionContainer } from "../SectionContainer";

export default {
  title: "SectionBackground",
  component: SectionBackground,
  args: {
    children: (
      <SectionContainer>
        <div>
          <h1>SectionContainer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            architecto temporibus dolore, eos ipsa recusandae qui ipsum iure
            voluptatem, aperiam perferendis ipsam blanditiis distinctio commodi
            repudiandae enim facilis ex. Fugit?
          </p>
        </div>
      </SectionContainer>
    )
  },
  argTypes: {
    children: { type: "" }
  }
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
