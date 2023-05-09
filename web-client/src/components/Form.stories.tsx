import type { Meta, StoryObj } from "@storybook/react";

import Form from "./Form";
import type { IProps as IForm } from "./Form";

const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

const defaultFormFields: IForm["fields"] = [
  {
    id: "text",
    type: "text",
    label: "Text Field Label",
    isRequired: false,
    placeholder: "text placeholder",
  },
  {
    id: "email",
    type: "email",
    label: "Email Field Label",
    isRequired: false,
    placeholder: "email placeholder",
  },
  {
    id: "textarea",
    type: "textarea",
    label: "TextArea Field Label",
    isRequired: false,
    placeholder: "textarea placeholder",
  },
];
export const Default: Story = {
  render: () => (
    <Form
      doShowValidation={false}
      fields={defaultFormFields}
      onFieldValueChange={() => {}}
      onValidationChange={() => {}}
    />
  ),
};

const requiredFormFields: IForm["fields"] = [
  {
    id: "text",
    type: "text",
    label: "Text Field Label",
    isRequired: true,
    placeholder: "text placeholder",
  },
  {
    id: "email",
    type: "email",
    label: "Email Field Label",
    isRequired: true,
    placeholder: "email placeholder",
  },
  {
    id: "textarea",
    type: "textarea",
    label: "TextArea Field Label",
    isRequired: true,
    placeholder: "textarea placeholder",
  },
];
export const IsRequired: Story = {
  render: () => (
    <Form
      doShowValidation={false}
      fields={requiredFormFields}
      onFieldValueChange={() => {}}
      onValidationChange={() => {}}
    />
  ),
};

const validationFormFields: IForm["fields"] = [
  {
    id: "text",
    type: "text",
    label: "Text Field Label",
    isRequired: true,
    placeholder: "text placeholder",
  },
  {
    id: "email",
    type: "email",
    label: "Email Field Label",
    isRequired: true,
    placeholder: "email placeholder",
  },
  {
    id: "textarea",
    type: "textarea",
    label: "TextArea Field Label",
    isRequired: true,
    placeholder: "textarea placeholder",
  },
];
export const Validation: Story = {
  render: () => (
    <Form
      doShowValidation={true}
      fields={validationFormFields}
      onFieldValueChange={() => {}}
      onValidationChange={() => {}}
    />
  ),
};
