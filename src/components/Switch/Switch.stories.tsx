import type { Meta, StoryObj } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../../index.css";
import Switch from "./index";

const meta = {
  title: "Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: { docs: { theme: themes.dark } },
  args: {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
