import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import MuiMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { useEffect, useId, useState } from 'react';

import { Typography } from '../Typography';
import { IMenuItem } from './types';

interface IMenuProps {
  text: string;
  onChange: (item: IMenuItem) => void;
  list: IMenuItem[];
  defaultValue?: string;
}

export const TextSelect = ({
  list,
  text,
  onChange,
  defaultValue,
}: IMenuProps) => {
  const [selected, setSelected] = useState<IMenuItem>();
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
      setSelected(list.find((el) => el.id === defaultValue));
    }
  }, [(defaultValue as any)?.id]);

  return (
    <>
      <Typography
        variant={'body.large'}
        style={{ userSelect: 'none' }}
        onClick={handleClick}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup={true}
        aria-controls={open ? 'basic-menu' : undefined}>
        {text} {selected?.label}
      </Typography>
      <MuiMenu
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        {list?.map(({ id, label }) => {
          if (label === 'divider') {
            return <Divider key={id} />;
          }
          return (
            <MenuItem
              key={id}
              onClick={() => {
                setSelected({ id, label });
                onChange({ id, label });
                setAnchorEl(null);
              }}>
              <MenuWrapper>
                <Typography variant={'title.medium'}>{label}</Typography>
              </MenuWrapper>
            </MenuItem>
          );
        })}
      </MuiMenu>
    </>
  );
};

const MenuWrapper = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Divider = styled(Box)`
  border-bottom: 1px solid ${(p) => p.theme.palette.Accent.Primary};
`;
