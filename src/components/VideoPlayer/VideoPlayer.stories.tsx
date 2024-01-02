import VideoPlayer, { VideoProps } from './VideoPlayer';

export default {
  title: 'Video',
  component: VideoPlayer,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'https://gist.github.com/jsturgis/3b19447b304616f18657',
    },
    width: {
      control: 'number',
    },
    type: {
      control: 'select',
      option: ['video/mp4', 'video/ogg', 'video/webm', 'video/avi'],
    },
    ratio: {
      control: 'select',
      option: ['1_1', '3_4', '9_16', '4_3', '16_9'],
    },
    poster: {
      control: 'text',
    },
    overrideAttribute: { control: 'object' },
    overrideCss: { control: 'object' },
  },
};

function Template(args: VideoProps) {
  return <VideoPlayer {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  src: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
  width: 600,
  poster: 'https://media.w3.org/2010/05/sintel/poster.png',
  type: 'video/mp4',
};
