import { css } from 'styled-components';
import { SpacingSizeType, spacing } from '../../types';

export const HorizontalTypeCss = css<{ size: SpacingSizeType }>`
  width: ${({ size }) => spacing[size]};
`;

export const VerticalTypeCss = css<{ size: SpacingSizeType }>`
  height: ${({ size }) => spacing[size]};
`;
