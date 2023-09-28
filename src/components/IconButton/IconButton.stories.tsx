import type { Meta, StoryObj } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../../index.css";
import CloseIcon from "../icons/CloseIcon";
import IconButton from "./index";

const meta = {
  title: "IconButton",
  component: IconButton,
  tags: ["autodocs"],
  parameters: { docs: { theme: themes.dark } },
  args: {
    children: <CloseIcon className="text-2xl" />,
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
