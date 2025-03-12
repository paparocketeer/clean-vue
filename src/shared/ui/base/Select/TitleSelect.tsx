import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import MuiMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { useEffect, useId, useRef, useState } from 'react';

import { Typography } from '../Typography';
import { ITitleMenuItem } from './types';

interface IMenuProps {
  onChange: (item: ITitleMenuItem) => void;
  list: ITitleMenuItem[];
  defaultValue?: number;
}

export const TitleSelect = ({ list, onChange, defaultValue }: IMenuProps) => {
  const titleRef = useRef<any>(null);
  const [selected, setSelected] = useState<ITitleMenuItem>();
  const id = useId();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!selected) {
      setSelected(list.find((el) => Number(el.id) === Number(defaultValue)));
    }
  }, [(defaultValue as any)?.id]);

  return (
    <>
      <Title ref={titleRef}>
        <Wrapper>
          <Typography
            variant={'title.medium'}
            bold
            style={{ userSelect: 'none' }}
            onClick={handleClick}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup={true}
            aria-controls={open ? 'basic-menu' : undefined}>
            Модель: {selected?.model}
          </Typography>
          <Typography
            variant={'title.medium'}
            bold
            style={{ userSelect: 'none' }}
            onClick={handleClick}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup={true}
            aria-controls={open ? 'basic-menu' : undefined}>
            Серийный номер: {selected?.number}
          </Typography>
        </Wrapper>
      </Title>
      <SMuiMenu
        width={titleRef?.current?.offsetWidth || '100'}
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        PopoverClasses={{
          paper: 'paper-with-custom-width',
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        {list?.map(({ id, model, number }) => {
          return (
            <MenuItem
              key={id}
              onClick={() => {
                setSelected({ id, model, number });
                onChange({ id, model, number });
                setAnchorEl(null);
              }}>
              <MenuWrapper>
                <Typography
                  variant={'title.medium'}
                  style={{ userSelect: 'none' }}
                  onClick={handleClick}
                  color={'colors.Black'}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup={true}
                  aria-controls={open ? 'basic-menu' : undefined}>
                  Серийный номер: {number}, Модель: {model}
                </Typography>
              </MenuWrapper>
            </MenuItem>
          );
        })}
      </SMuiMenu>
    </>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;

const MenuWrapper = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Title = styled(Box)`
  width: 100%;
  border-radius: 100px;
  border: 1px solid
    ${(p) =>
      p.theme.palette.Palette['palette-primary-blue'][
        'palette-primary-blue-200'
      ]};
  background: #f9fbfc;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SMuiMenu = styled(MuiMenu)<{ width: string }>`
  .paper-with-custom-width {
    width: calc(${(p) => p.width}px - 30px);
    left: calc(-30px);
  }
`;
