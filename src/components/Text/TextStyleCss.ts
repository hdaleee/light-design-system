import { css } from 'styled-components';
import { SpacingSizeType, spacing } from '../../types';
import { lastCharToUpperCase } from '../../utils';

export const headerBold = css<{ $useRem: boolean }>`
  font-size: ${({ $useRem }) => spacing[lastCharToUpperCase('spacing_h', $useRem) as SpacingSizeType]};
  font-weight: bold;
`;

export const headerNormal = css<{ $useRem: boolean }>`
  font-size: ${({ $useRem }) => spacing[lastCharToUpperCase('spacing_h', $useRem) as SpacingSizeType]};
  font-weight: normal;
`;

export const headerLighter = css<{ $useRem: boolean }>`
  font-size: ${({ $useRem }) => spacing[lastCharToUpperCase('spacing_h', $useRem) as SpacingSizeType]};
  font-weight: lighter;
`;

export const bodyBold = css<{ $useRem: boolean }>`
  font-size: ${({ $useRem }) => spacing[lastCharToUpperCase('spacing_d', $useRem) as SpacingSizeType]};
  font-weight: bold;
`;

export const bodyNormal = css<{ $useRem: boolean }>`
  font-size: ${({ $useRem }) => spacing[lastCharToUpperCase('spacing_d', $useRem) as SpacingSizeType]};
  font-weight: normal;
`;

export const bodyLighter = css<{ $useRem: boolean }>`
  font-size: ${({ $useRem }) => spacing[lastCharToUpperCase('spacing_d', $useRem) as SpacingSizeType]};
  font-weight: lighter;
`;
