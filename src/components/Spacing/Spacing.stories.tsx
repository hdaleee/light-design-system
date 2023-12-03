import Spacing, { SpacingProps } from './Spacing';

export default {
  title: 'Spacing',
  component: Spacing,
  argTypes: {
    overrideCss: { control: 'object' },
    size: {
      control: 'select',
      option: [
        'spacing_a',
        'spacing_b',
        'spacing_c',
        'spacing_d',
        'spacing_e',
        'spacing_f',
        'spacing_g',
        'spacing_h',
        'spacing_i',
        'spacing_j',
        'spacing_k',
        'spacing_l',
        'spacing_m',
        'spacing_n',
        'spacing_o',
        'spacing_p',
        'spacing_q',
        'spacing_r',
        'spacing_s',
        'spacing_t',
        'spacing_u',
        'spacing_v',
        'spacing_w',
        'spacing_x',
        'spacing_y',
        'spacing_z',
        'spacing_A',
        'spacing_B',
        'spacing_C',
        'spacing_D',
        'spacing_E',
        'spacing_F',
        'spacing_G',
        'spacing_H',
        'spacing_I',
        'spacing_J',
        'spacing_K',
        'spacing_L',
        'spacing_M',
        'spacing_N',
        'spacing_O',
        'spacing_P',
        'spacing_Q',
        'spacing_R',
        'spacing_S',
        'spacing_T',
        'spacing_U',
        'spacing_V',
        'spacing_W',
        'spacing_X',
        'spacing_Y',
        'spacing_Z',
      ],
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
