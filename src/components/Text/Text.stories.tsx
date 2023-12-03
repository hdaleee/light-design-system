import Text, { TextProps } from './Text';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    content: {
      control: 'text',
    },
    overrideCss: { control: 'object' },
    styleTheme: {
      control: 'radio',
      option: ['headerBold', 'headerNormal', 'headerLighter', 'bodyBold', 'bodyNormal', 'bodyLighter'],
    },
    useRem: {
      control: 'boolean',
    },
  },
};

function Template(args: TextProps) {
  return <Text {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  content: 'content',
  overrideCss: { color: 'coral' },
  styleTheme: 'headerBold',
};
