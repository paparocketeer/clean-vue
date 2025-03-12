import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import MuiMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { useId } from 'react';

import { Typography } from '../base/Typography';
import { ICheckedItem, IMenuItem } from './types';

interface IMenuProps {
  children?: any;
  onChange: (items: ICheckedItem) => void;
  onClick?: Function;
  list?: IMenuItem[];
}

export const BaseMenu = ({ children, list, onChange, onClick }: IMenuProps) => {
  const id = useId();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    onClick?.();
  };

  const handleClose = () => {
    setAnchorEl(null);
    onClick?.();
  };

  if (!children) {
    return <></>;
  }
  return (
    <>
      {React.cloneElement(children, {
        id,
        'aria-controls': open ? 'basic-menu' : undefined,
        'aria-haspopup': true,
        'aria-expanded': open ? 'true' : undefined,
        onClick: handleClick,
      })}
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
        {list?.map(({ id, label, icon, ...el }) => {
          if (label === 'divider') {
            return <Divider key={id} />;
          }

          return (
            <MenuItem
              key={id}
              onClick={() => {
                const item: ICheckedItem = {
                  id,
                  label,
                };
                onChange(item);
                handleClose();
              }}
              {...el}>
              <MenuWrapper>
                {icon &&
                  React.cloneElement(icon, {
                    width: 20,
                    height: 20,
                  })}
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
  align-items: center;
  gap: 8px;
  color: ${(p) => p.theme.palette.Accent.Primary};
`;

const Divider = styled(Box)`
  border-bottom: 1px solid
    ${(p) =>
      p.theme.palette.Palette['palette-gray-light']['palette-gray-light-600']};
  margin: 8px -8px;
`;
