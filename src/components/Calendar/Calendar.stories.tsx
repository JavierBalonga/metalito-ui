import type { Meta, StoryObj } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../../index.css";
import Calendar from "./index";

const meta = {
  title: "Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: { docs: { theme: themes.dark } },
  args: {},
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
