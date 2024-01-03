import { useMemo, useState, useRef } from 'react';
import styled, { CSSProperties, ThemeProvider } from 'styled-components';
import { createPortal } from 'react-dom';
import { colors, spacing } from '../../types';
import { Text } from '../Text';
import { Spacing } from '../Spacing';

export type DropdownProps = {
  hintText?: string;
  defaultItem?: { key: number | string; title: string; value: string | number | boolean };
  items: { key: number | string; title: string; value: string | number | boolean }[];
  itemMaxCount?: 3 | 5 | 10 | 15 | 20;
  responsiveMode?: 'use' | 'none';
};

/**
 * @param hintText string
 * @param defaultItem object // { key: number | string; title: string; value: string | number | boolean }
 * @param items defaultItem[]
 * @param itemMaxCount 3 | 5 | 10 | 15 | 20
 * @param responsiveMode 'use' | 'none' */
function Dropdown({ hintText, defaultItem, items, itemMaxCount = 5, responsiveMode = 'none' }: DropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [dropdownTargetPosition, setDropdownTargetPosition] = useState<{
    top: number;
    left: number;
    height: number;
    width: number;
  }>({
    top: 0,
    left: 0,
    height: 0,
    width: 0,
  });
  const [selectedItem, setSelectedItem] = useState<
    | {
        key: number | string;
        title: string;
        value: string | number | boolean;
      }
    | undefined
  >(defaultItem);

  const dropdownTargetRef = useRef<HTMLDivElement | null>(null);

  const defaultHintText = useMemo(() => {
    if (selectedItem) {
      return selectedItem.title;
    }
    return defaultItem?.title || hintText || items[0].title;
  }, [selectedItem, hintText, defaultItem, items]);

  const portalTarget = document.body;

  const dropdownHeight = (itemMaxCount < items.length ? itemMaxCount : items.length) * 20;

  const dropdownCss: CSSProperties = useMemo(() => {
    const { top, height, left, width } = dropdownTargetPosition;

    if (window.innerHeight < height + top + dropdownHeight) {
      return { width: `${width}px`, left: `${left}px`, top: `${top - dropdownHeight}px` };
    }
    return { width: `${width}px`, left: `${left}px`, top: `${top + height}px` };
  }, [dropdownHeight, dropdownTargetPosition]);

  const clickDropdownTarget = () => {
    if (!dropdownTargetRef.current) {
      return;
    }

    const { top, left, height, width } = dropdownTargetRef.current.getBoundingClientRect();

    setDropdownTargetPosition({ top, left, height, width });
    setIsDropdownOpen(true);
  };

  const changeDropdownClosed = () => {
    setIsDropdownOpen(false);
  };

  const selectItemTitle = (item: { key: number | string; title: string; value: string | number | boolean }) => {
    setSelectedItem(item);
  };

  return (
    <ThemeProvider theme={{ spacing, colors }}>
      <StyledDropdownBox ref={dropdownTargetRef} $isResponsive={responsiveMode === 'use'} onClick={clickDropdownTarget}>
        <Spacing size="spacing_a" spacingType="horizontal" />
        <StyledHintTextBox $isResponsive={responsiveMode === 'use'}>
          <Text content={defaultHintText} />
        </StyledHintTextBox>

        <Spacing size="spacing_a" spacingType="horizontal" />
        <Text content={isDropdownOpen ? '▲' : '▼'} />

        <Spacing size="spacing_a" spacingType="horizontal" />
      </StyledDropdownBox>

      {isDropdownOpen &&
        createPortal(
          <>
            <StyledDropdown
              height={dropdownHeight}
              style={dropdownCss}
              $isResponsive={responsiveMode === 'use'}
              $dropdownTargetPosition={dropdownTargetPosition}>
              {items.map(value => (
                <StyledDropdownEntry
                  key={value.key}
                  onClick={() => {
                    selectItemTitle(value);
                    changeDropdownClosed();
                  }}>
                  <Spacing size="spacing_a" spacingType="horizontal" />
                  <Text content={value.title} />
                </StyledDropdownEntry>
              ))}
            </StyledDropdown>
            <StyledBackground onClick={changeDropdownClosed} />
          </>,
          portalTarget,
        )}
    </ThemeProvider>
  );
}

const StyledHintTextBox = styled.div<{ $isResponsive: boolean }>`
  align-items: center;
  display: flex;
  height: ${({ theme }) => theme.spacing.spacing_f};
  width: ${({ theme, $isResponsive }) => ($isResponsive ? '100%' : theme.spacing.spacing_p)};
`;

const StyledDropdownBox = styled.div<{ $isResponsive: boolean }>`
  align-items: center;
  border: ${({ theme }) => `1px ${theme.colors.light_gray_e0} solid`};
  border-radius: ${({ theme }) => theme.spacing.spacing_a};
  cursor: pointer;
  display: flex;
  position: relative;
  width: ${({ theme, $isResponsive }) => ($isResponsive ? '100%' : theme.spacing.spacing_v)};
`;

const StyledDropdown = styled.div<{
  $isResponsive: boolean;
  height: number;
  $dropdownTargetPosition: { top: number; left: number; height: number; width: number };
}>`
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px ${theme.colors.light_gray_e0} solid`};
  border-radius: ${({ theme }) => theme.spacing.spacing_a};
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: ${({ height }) => height}px;
  overflow: auto;
  position: fixed;
  width: ${({ theme, $isResponsive }) => ($isResponsive ? '100%' : theme.spacing.spacing_v)};
  z-index: 1;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledDropdownEntry = styled.div`
  display: flex;
  max-height: 20px;
  min-height: 20px;
`;

const StyledBackground = styled.div`
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 0;
`;

export default Dropdown;
