import { spacing } from '../../types';
import Spacing, { SpacingProps } from './Spacing';

export default {
  title: 'Spacing',
  component: Spacing,
  tags: ['autodocs'],
  argTypes: {
    overrideCss: { control: 'object' },
    size: {
      control: 'select',
      option: Object.keys(spacing),
    },
    useRem: {
      control: 'boolean',
    },
  },
};

function Template(args: SpacingProps) {
  return <Spacing {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  overrideCss: { border: '1px coral solid' },
  useRem: true,
};
