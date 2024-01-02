import { css } from 'styled-components';
import { lastCharToUpperCase } from '../../utils';

export const small = css<{ useRem: boolean; value: boolean }>`
  border-radius: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_n', useRem)]};
  height: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_g', useRem)]};
  width: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_n', useRem)]};

  &:before {
    border-radius: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_e', useRem)]};
    height: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_e', useRem)]};
    left: ${({ theme, value, useRem }) =>
      theme.spacing[lastCharToUpperCase(value ? 'spacing_h' : 'spacing_a', useRem)]};
    top: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_a', useRem)]};
    width: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_e', useRem)]};
  }
`;

export const normal = css<{ useRem: boolean; value: boolean }>`
  border-radius: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_r', useRem)]};
  height: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_j', useRem)]};
  width: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_r', useRem)]};

  &:before {
    border-radius: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_h', useRem)]};
    height: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_h', useRem)]};
    left: ${({ theme, value, useRem }) =>
      theme.spacing[lastCharToUpperCase(value ? 'spacing_i' : 'spacing_a', useRem)]};
    top: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_a', useRem)]};
    width: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_h', useRem)]};
  }
`;

export const large = css<{ useRem: boolean; value: boolean }>`
  border-radius: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_w', useRem)]};
  height: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_l', useRem)]};
  width: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_w', useRem)]};

  &:before {
    border-radius: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_j', useRem)]};
    height: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_j', useRem)]};
    left: ${({ theme, value, useRem }) =>
      theme.spacing[lastCharToUpperCase(value ? 'spacing_l' : 'spacing_a', useRem)]};
    top: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_a', useRem)]};
    width: ${({ theme, useRem }) => theme.spacing[lastCharToUpperCase('spacing_j', useRem)]};
  }
`;
