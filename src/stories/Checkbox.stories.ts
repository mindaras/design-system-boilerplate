import { Checkbox } from "@components/checkbox/Checkbox";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "example",
    label: "Terms and conditions",
    additional: "Agreement that you've read the terms and conditions.",
    onChange: (value) => console.log(value),
  },
};

export default meta;
