import { css } from 'styled-components';
import { SpacingSizeType } from '../../types';

export const HorizontalTypeCss = css<{ size: SpacingSizeType }>`
  width: ${({ theme, size }) => theme.spacing[size]};
`;

export const VerticalTypeCss = css<{ size: SpacingSizeType }>`
  height: ${({ theme, size }) => theme.spacing[size]};
`;
