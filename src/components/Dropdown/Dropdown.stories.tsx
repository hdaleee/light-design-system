import { useState } from 'react';
import styled from 'styled-components';
import Dropdown, { DropdownProps } from './Dropdown';
import { Switch } from '../Switch';

export default {
  title: 'Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    hintText: { control: 'text' },
    defaultItem: { control: 'object' },
    items: { control: 'object' },
    itemMaxCount: { control: 'select', options: [3, 5, 10, 15, 20] },
    responsiveMode: { control: 'inline-radio', options: ['use', 'none'] },
  },
};

function Template(args: DropdownProps) {
  const [positionBottom, setPositionBottom] = useState(false);

  const clickSwitch = (value: boolean) => {
    setPositionBottom(value);
  };

  return (
    <StyledDropdownBox>
      <StyledSwitchWrapper>
        아래로 보내기
        <Switch onClick={clickSwitch} size="small" />
      </StyledSwitchWrapper>
      <StyledDropdownWrapper $positionBottom={positionBottom}>
        <Dropdown {...args} />
      </StyledDropdownWrapper>
    </StyledDropdownBox>
  );
}

const StyledDropdownBox = styled.div`
  border: 1px coral solid;
  position: relative;
  width: 100%;
  height: calc(100vh - 32px);
`;

const StyledSwitchWrapper = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const StyledDropdownWrapper = styled.div<{ $positionBottom: boolean }>`
  border: 1px coral solid;
  height: fit-content;
  position: absolute;
  width: fit-content;

  ${({ $positionBottom }) => ($positionBottom ? 'bottom: 0' : 'top: 0')};
`;

export const Default = Template.bind({});

Default.args = {
  hintText: 'hintText',
  items: [
    { key: 0, title: 'title_A', value: 'value_A' },
    { key: 1, title: 'title_B', value: 'value_B' },
    { key: 2, title: 'title_C', value: 'value_C' },
    { key: 3, title: 'title_D', value: 'value_D' },
    { key: 4, title: 'title_E', value: 'value_E' },
    { key: 5, title: 'title_F', value: 'value_F' },
    { key: 6, title: 'title_G', value: 'value_G' },
  ],
  defaultItem: { key: 3, title: 'title_D', value: 'value_D' },
};
