import { colors, iconSize } from '../../types';
import Icon, { IconProps } from './Icon';

export default {
  title: 'Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: 'text',
    },
    size: {
      control: 'inline-radio',
      options: Object.keys(iconSize),
    },
    color: {
      control: 'inline-radio',
      options: Object.keys(colors),
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
