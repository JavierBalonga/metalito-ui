import type { Meta, StoryObj } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../../index.css";
import EyeIcon from "../icons/EyeIcon";
import SelectInput from "./index";

const meta = {
  title: "SelectInput",
  component: SelectInput,
  tags: ["autodocs"],
  parameters: { docs: { theme: themes.dark } },
  args: {
    label: "Label",
    placeholder: "Placeholder",
    helperText: "Helper text",
    options: [
      { value: "Option 1" },
      { value: "Option 2" },
      { value: "Option 3" },
    ],
  },
} satisfies Meta<typeof SelectInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
