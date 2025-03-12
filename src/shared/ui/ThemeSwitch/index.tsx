import styled from '@emotion/styled';
import React, { useState } from 'react';

import { MoonIcon, SunIcon } from '../../icons';

export const ThemeSwitch = () => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper
      onClick={() => {
        setOpen((p) => !p);
      }}>
      <Switcher open={open}>{open ? <SunIcon /> : <MoonIcon />}</Switcher>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 84px;
  height: 40px;
  border-radius: 100px;
  position: relative;
  background: #b5d4ff;
  cursor: pointer;
`;

const Switcher = styled.div<{ open: boolean }>`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background: ${(p) => p.theme.palette.colors.White};
  box-shadow:
    2px 0 6.201px 0px rgba(0, 0, 0, 0.15),
    2px 0 0.775px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  position: absolute;
  transition: all 0.4s;
  left: ${(p) => (p.open ? 0 : 43)}px;
  top: 0;
`;
