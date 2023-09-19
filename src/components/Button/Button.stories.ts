import "../../index.css";

import type { Meta, StoryObj } from "@storybook/react";

import Button from "./index";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
