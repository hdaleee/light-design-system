import { useEffect, useState } from 'react';
import styled, { CSSProperties, ThemeProvider } from 'styled-components';
import { spacing, colors, SizeType } from '../../types';
import { small, normal, large } from './SwitchStyleCss';

export type SwitchProps = {
  value?: boolean;
  disabled?: boolean;
  size?: SizeType;
  onClick?: (value: boolean) => void;
  overrideCss?: { label?: CSSProperties; input?: CSSProperties };
  useRem?: boolean;
};

/**
 * @param value boolean // default value is false
 * @param disabled boolean // default value is false
 * @param size 'small' | 'normal' | 'large'
 * @param overrideCss object // css object type
 * @param useRem boolean // default value is false, it means using 'px' */
function Switch({
  value = false,
  disabled = false,
  size = 'normal',
  onClick,
  overrideCss,
  useRem = false,
}: SwitchProps) {
  const [switchValue, setSwitchValue] = useState<boolean>(value);

  useEffect(() => {
    setSwitchValue(value);
  }, [value]);

  const toggleValue = () => {
    setSwitchValue(prev => !prev);
    if (onClick) {
      onClick(!switchValue);
    }
  };

  return (
    <ThemeProvider theme={{ spacing, colors }}>
      <StyledSwitchLabel style={overrideCss?.label}>
        <StyledSwitchInput
          role="switch"
          type="checkbox"
          size={size}
          value={switchValue}
          disabled={disabled}
          $useRem={useRem}
          onClick={() => toggleValue()}
          style={overrideCss?.input}
        />
      </StyledSwitchLabel>
    </ThemeProvider>
  );
}

const StyledSwitchLabel = styled.label`
  align-items: center;
  display: flex;
`;

const StyledSwitchInput = styled.input<{ size: SizeType; value: boolean; $useRem: boolean }>`
  appearance: none;
  background-color: ${({ theme, value }) => (value ? 'coral' : theme.colors.light_gray_a0)};
  cursor: pointer;
  position: relative;

  &:before {
    background-color: ${({ theme }) => theme.colors.white};
    content: '';
    position: absolute;
    transition: left 250ms linear;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:disabled:before {
    background-color: ${({ theme }) => theme.colors.light_gray_f0};
  }

  ${({ size }) => {
    return { small, normal, large }[size];
  }};
`;

export default Switch;
