import { TextComponent } from ".";

export default {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children: `
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Tenetur iusto optio iste illo officiis, esse ratione aliquam,
    itaque, rem ducimus voluptate repudiandae adipisci sint nobis a mollitia sit culpa odit?`
  },
  argTypes: {
    children: { type: "string" }
  }
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
