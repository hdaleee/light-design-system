import Switch, { SwitchProps } from './Switch';

export default {
  title: 'Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'boolean' },
    disabled: { control: 'boolean' },
    overrideCss: { control: 'object' },
  },
};

function Template(args: SwitchProps) {
  return <Switch {...args} />;
}

export const Default = Template.bind({});

Default.args = {};
