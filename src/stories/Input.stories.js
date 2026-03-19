import { Input } from './Input';

export default {
  title: 'Common/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Email',
    placeholder: 'name@example.com',
  },
};

export const Default = {};

export const Disabled = {
  args: {
    disabled: true,
    placeholder: 'Input disabled',
  },
};
