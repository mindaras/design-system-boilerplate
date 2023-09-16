import { RadioButton } from "@components/radio/RadioButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RadioButton> = {
  title: "RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "example",
    label: "Your choice",
    additional: "Additional information about your choice.",
    onChange: (value) => console.log(value),
  },
};

export default meta;
