import { iconName, colors, iconSize } from '../../types';
import Icon, { IconProps } from './Icon';

export default {
  title: 'Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: 'select',
      options: iconName,
    },
    color: {
      control: 'inline-radio',
      options: Object.keys(colors),
    },
    size: {
      control: 'inline-radio',
      options: Object.keys(iconSize),
    },
  },
};

function Template(args: IconProps) {
  return <Icon {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  iconName: 'ic_menu',
};
