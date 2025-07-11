import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";

const meta = {
  title: "My/iconTrash",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    color: { control: "color" },
    viewBox: { control: "text" },
    preserveAspectRatio: { control: "text" },
    title: { control: "text" },
  },
  args: {},
} satisfies Meta<{
  width?: number;
  height?: number;
  color?: string;
  viewBox?: string;
  preserveAspectRatio?: string;
  title?: string;
}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => (
    <img src="/icons/iconTrash/iconTrash.svg" alt="" {...props} />
  ),
};
