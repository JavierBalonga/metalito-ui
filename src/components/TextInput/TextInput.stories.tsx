import "../../index.css";
import EyeIcon from "../icons/EyeIcon";

import type { Meta, StoryObj } from "@storybook/react";

import TextInput from "./index";

const meta = {
  title: "TextInput",
  component: TextInput,
  tags: ["autodocs"],
  args: {
    label: "Label",
    placeholder: "Placeholder",
    helperText: "Helper text",
    icon: <EyeIcon />,
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
