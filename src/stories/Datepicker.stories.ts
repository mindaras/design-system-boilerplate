import { Datepicker } from "@components/datepicker/Datepicker";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Datepicker> = {
  title: "Datepicker",
  component: Datepicker,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onChange: (date) => console.log(date),
    additional: "Enter the payment period",
  },
};

export default meta;
