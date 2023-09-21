import type { Meta, StoryObj } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../../index.css";
import Button from "./index";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { docs: { theme: themes.dark } },
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
