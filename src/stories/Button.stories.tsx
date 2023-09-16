import { Button } from "@components/button/Button";
import type { Meta, StoryObj } from "@storybook/react";
import { Spacer } from "./components/spacer/Spacer";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const All: Story = {
  render: () => (
    <div>
      <div>
        <Button text="Button label" onClick={() => null} />
        <Spacer horizontal />
        <Button text="Button label" size="l" onClick={() => null} />
        <Spacer horizontal />
        <Button text="Button label" size="xl" onClick={() => null} />
        <Spacer horizontal />
        <Button text="Button label" size="xl" disabled onClick={() => null} />
      </div>
      <Spacer vertical />
      <div>
        <Button text="Button label" variant="secondary" onClick={() => null} />
        <Spacer horizontal />
        <Button
          text="Button label"
          variant="secondary"
          size="l"
          onClick={() => null}
        />
        <Spacer horizontal />
        <Button
          text="Button label"
          variant="secondary"
          size="xl"
          onClick={() => null}
        />
        <Spacer horizontal />
        <Button
          text="Button label"
          variant="secondary"
          size="xl"
          disabled
          onClick={() => null}
        />
      </div>
      <Spacer vertical />
      <div>
        <Button text="Button label" variant="expressive" onClick={() => null} />
        <Spacer horizontal />
        <Button
          text="Button label"
          variant="expressive"
          size="l"
          onClick={() => null}
        />
        <Spacer horizontal />
        <Button
          text="Button label"
          variant="expressive"
          size="xl"
          onClick={() => null}
        />
        <Spacer horizontal />
        <Button
          text="Button label"
          variant="expressive"
          size="xl"
          disabled
          onClick={() => null}
        />
      </div>
      <Spacer vertical />
      <div>
        <Button
          text="Button label"
          variant="destructive"
          onClick={() => null}
        />
        <Spacer horizontal />
        <Button
          text="Button label"
          variant="destructive"
          size="l"
          onClick={() => null}
        />
        <Spacer horizontal />
        <Button
          text="Button label"
          variant="destructive"
          size="xl"
          onClick={() => null}
        />
        <Spacer horizontal />
        <Button
          text="Button label"
          variant="destructive"
          size="xl"
          disabled
          onClick={() => null}
        />
      </div>
      <Spacer vertical />
      <div>
        <Button
          text="Button label"
          variant="tertiary-purple"
          onClick={() => null}
        />
        <Spacer horizontal />
        <Button
          text="Button label"
          variant="tertiary-purple"
          size="l"
          onClick={() => null}
        />
        <Spacer horizontal />
        <Button
          text="Button label"
          variant="tertiary-purple"
          size="xl"
          onClick={() => null}
        />
        <Spacer horizontal />
        <Button
          text="Button label"
          variant="tertiary-purple"
          size="xl"
          disabled
          onClick={() => null}
        />
      </div>
      <Spacer vertical />
      <div>
        <Button text="Button label" variant="text" onClick={() => null} />
        <Spacer horizontal />
        <Button
          text="Button label"
          variant="text"
          size="l"
          onClick={() => null}
        />
        <Spacer horizontal />
        <Button
          text="Button label"
          variant="text"
          size="xl"
          onClick={() => null}
        />
        <Spacer horizontal />
        <Button
          text="Button label"
          variant="text"
          size="xl"
          disabled
          onClick={() => null}
        />
      </div>
    </div>
  ),
};

export const Primary: Story = {
  args: {
    text: "Button label",
    variant: "primary",
    onClick: () => null,
  },
};

export const Secondary: Story = {
  args: {
    text: "Button label",
    variant: "secondary",
    onClick: () => null,
  },
};

export const Expressive: Story = {
  args: {
    text: "Button label",
    variant: "expressive",
    onClick: () => null,
  },
};

export const Destructive: Story = {
  args: {
    text: "Button label",
    variant: "destructive",
    onClick: () => null,
  },
};

export const TertiaryPurple: Story = {
  args: {
    text: "Button label",
    variant: "tertiary-purple",
    onClick: () => null,
  },
};

export const Text: Story = {
  args: {
    text: "Button label",
    variant: "text",
    onClick: () => null,
  },
};

export default meta;
