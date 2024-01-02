import { useEffect, useState } from 'react';
import styled, { CSSProperties, ThemeProvider } from 'styled-components';
import { spacing, colors } from '../../types';
import { small, normal, large } from './SwitchStyleCss';

export type SwitchProps = {
  value?: boolean;
  disabled?: boolean;
  size?: 'small' | 'normal' | 'large';
  overrideCss?: { label?: CSSProperties; input?: CSSProperties };
  useRem?: boolean;
};

/**
 * @param overrideCss css object type */
function Switch({ value = false, disabled = false, size = 'normal', overrideCss, useRem = false }: SwitchProps) {
  const [switchValue, setSwitchValue] = useState<boolean>(value);

  useEffect(() => {
    setSwitchValue(value);
  }, [value]);

  const toggleValue = () => {
    setSwitchValue(prev => !prev);
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
          useRem={useRem}
          onClick={toggleValue}
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

const StyledSwitchInput = styled.input<{ size: 'small' | 'normal' | 'large'; value: boolean; useRem: boolean }>`
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
