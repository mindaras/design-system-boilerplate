import { Card } from "@components/card/Card";
import type { Meta, StoryObj } from "@storybook/react";
import { Inline } from "./components/inline/Inline";
import { Spacer } from "./components/spacer/Spacer";

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    disablePadding: false,
    children: <p>Content</p>,
  },
};

export const Multiple: Story = {
  render: () => (
    <Inline>
      <Card>
        <p>First</p>
      </Card>
      <Spacer horizontal />
      <Card>
        <p>Second</p>
      </Card>
      <Spacer horizontal />
      <Card>
        <p>Third</p>
      </Card>
    </Inline>
  ),
};

export default meta;
