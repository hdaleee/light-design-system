import Image, { ImageProps } from './Image';

export default {
  title: 'Image',
  component: Image,
  argTypes: {
    url: {
      control: 'text',
    },
    width: {
      control: 'number',
    },
    ratio: {
      control: 'select',
      option: ['1_1', '3_4', '9_16', '4_3', '16_9'],
    },
    scale: {
      control: 'select',
      option: ['cover', 'contain', 'auto'],
    },
    imagePosition: {
      control: 'select',
      option: ['bottom', 'top', 'center', 'left', 'right'],
    },
    useRem: {
      control: 'boolean',
    },
    overrideCss: { control: 'object' },
  },
};

function Template(args: ImageProps) {
  return <Image {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  url: 'https://source.unsplash.com/random/?nature',
  width: 400,
};
