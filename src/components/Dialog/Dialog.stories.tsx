import type { Meta, StoryObj } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../../index.css";
import { useState } from "react";
import Button from "../Button";
import TextInput from "../TextInput";
import Dialog from "./index";

const meta = {
  title: "Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: { docs: { theme: themes.dark } },
  args: {
    children: (
      <div className="flex flex-col gap-4 p-8">
        <h1 className="text-2xl">Edit profile</h1>
        <p>
          Make changes to your profile here.
          <br />
          Click save when you're done.
        </p>
        <TextInput label="Name" name="name" />
        <TextInput label="Email" name="email" />
      </div>
    ),
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
      <>
        <Button variant="contained" onClick={handleOpen}>
          Open Dialog
        </Button>
        <Dialog {...props} open={open} onClose={handleClose} />
      </>
    );
  },
};
