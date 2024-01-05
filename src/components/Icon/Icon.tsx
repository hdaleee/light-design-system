import styled, { ThemeProvider } from 'styled-components';
import { ColorsType, IconNameType, IconSizeType, iconSize } from '../../types';
import icons from '../../assets/icons';

export type IconProps = {
  iconName?: IconNameType;
  color?: ColorsType;
  size?: IconSizeType;
};

/**
 * @param iconName string // IconNameType
 * @param size string // ColorsType
 * @param color string // IconSizeType */
function Icon({ iconName = 'ic_menu', size = 'medium', color = 'coral_main' }: IconProps) {
  return (
    <ThemeProvider theme={{ iconSize }}>
      <StyledIcon size={size}>{icons[iconName]({ color })}</StyledIcon>
    </ThemeProvider>
  );
}

const StyledIcon = styled.div<{ size: IconSizeType }>`
  height: ${({ theme, size }) => theme.iconSize[size]};
  width: ${({ theme, size }) => theme.iconSize[size]};
`;

export default Icon;
