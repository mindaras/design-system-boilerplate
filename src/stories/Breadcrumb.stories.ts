import { Breadcrumb } from "@components/breadcrumb/Breadrcrumb";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Breadcrumb> = {
  title: "Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      {
        label: "Home",
        value: "/home",
        onClick: (value) => alert(value),
      },
      {
        label: "Profile",
        value: "/profile",
        onClick: (value) => alert(value),
      },
      {
        label: "Billing",
        value: "/billing",
        onClick: (value) => alert(value),
      },
      {
        label: "Billing details",
        value: "/billing-details",
        onClick: (value) => alert(value),
      },
      {
        label: "Payment method",
        value: "/payment-method",
        onClick: (value) => alert(value),
      },
    ],
  },
};

export default meta;
