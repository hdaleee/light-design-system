export type TextStyleThemeType =
  | 'headerBold' // 2rem
  | 'headerNormal' // 2rem
  | 'headerLighter' // 2rem
  | 'bodyBold' // 1rem
  | 'bodyNormal' // 1rem
  | 'bodyLighter'; // 1rem

export type SpacingType = 'vertical' | 'horizontal';

export type SpacingSizeType =
  | 'spacing_a'
  | 'spacing_b'
  | 'spacing_c'
  | 'spacing_d'
  | 'spacing_e'
  | 'spacing_f'
  | 'spacing_g'
  | 'spacing_h'
  | 'spacing_i'
  | 'spacing_j'
  | 'spacing_k'
  | 'spacing_l'
  | 'spacing_m'
  | 'spacing_n'
  | 'spacing_o'
  | 'spacing_p'
  | 'spacing_q'
  | 'spacing_r'
  | 'spacing_s'
  | 'spacing_t'
  | 'spacing_u'
  | 'spacing_v'
  | 'spacing_w'
  | 'spacing_x'
  | 'spacing_y'
  | 'spacing_z'
  | 'spacing_A'
  | 'spacing_B'
  | 'spacing_C'
  | 'spacing_D'
  | 'spacing_E'
  | 'spacing_F'
  | 'spacing_G'
  | 'spacing_H'
  | 'spacing_I'
  | 'spacing_J'
  | 'spacing_K'
  | 'spacing_L'
  | 'spacing_M'
  | 'spacing_N'
  | 'spacing_O'
  | 'spacing_P'
  | 'spacing_Q'
  | 'spacing_R'
  | 'spacing_S'
  | 'spacing_T'
  | 'spacing_U'
  | 'spacing_V'
  | 'spacing_W'
  | 'spacing_X'
  | 'spacing_Y'
  | 'spacing_Z';

export const spacing: Record<SpacingSizeType, string> = {
  spacing_a: '4px',
  spacing_b: '8px',
  spacing_c: '12px',
  spacing_d: '16px',
  spacing_e: '20px',
  spacing_f: '24px',
  spacing_g: '28px',
  spacing_h: '32px',
  spacing_i: '36px',
  spacing_j: '40px',
  spacing_k: '44px',
  spacing_l: '48px',
  spacing_m: '52px',
  spacing_n: '56px',
  spacing_o: '60px',
  spacing_p: '64px',
  spacing_q: '68px',
  spacing_r: '72px',
  spacing_s: '76px',
  spacing_t: '80px',
  spacing_u: '84px',
  spacing_v: '88px',
  spacing_w: '92px',
  spacing_x: '96px',
  spacing_y: '100px',
  spacing_z: '104px',
  spacing_A: '0.25rem',
  spacing_B: '0.5rem',
  spacing_C: '0.75rem',
  spacing_D: '1rem',
  spacing_E: '1.25rem',
  spacing_F: '1.5rem',
  spacing_G: '1.75rem',
  spacing_H: '2rem',
  spacing_I: '2.25rem',
  spacing_J: '2.5rem',
  spacing_K: '2.75rem',
  spacing_L: '3rem',
  spacing_M: '3.25rem',
  spacing_N: '3.5rem',
  spacing_O: '3.75rem',
  spacing_P: '4rem',
  spacing_Q: '4.25rem',
  spacing_R: '4.5rem',
  spacing_S: '4.75rem',
  spacing_T: '5rem',
  spacing_U: '5.25rem',
  spacing_V: '5.5rem',
  spacing_W: '5.75rem',
  spacing_X: '6rem',
  spacing_Y: '6.25rem',
  spacing_Z: '6.5rem',
};

export type RatioType = '1_1' | '3_4' | '9_16' | '4_3' | '16_9';

export type PositionType = 'bottom' | 'top' | 'center' | 'left' | 'right';
