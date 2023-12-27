import Text, { TextProps } from './Text';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    content: {
      control: 'text',
    },
    styleTheme: {
      control: 'select',
      option: ['headerBold', 'headerNormal', 'headerLighter', 'bodyBold', 'bodyNormal', 'bodyLighter'],
    },
    width: {
      control: 'select',
      option: ['auto', 'fit-content'],
    },
    useRem: {
      control: 'boolean',
    },
    overrideCss: { control: 'object' },
  },
};

function Template(args: TextProps) {
  return <Text {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  content: 'content',
  overrideCss: { color: 'coral', border: 'coral 1px solid' },
  styleTheme: 'headerBold',
};
