import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import MuiMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { useId, useRef } from 'react';

import { Checkbox } from '../base/CheckBox';
import { Typography } from '../base/Typography';
import { ICheckedItem, IMenuItem } from './types';

interface IMenuProps {
  children: any;
  onChange: (items: ICheckedItem[]) => void;
  checkedItems?: ICheckedItem[];
  list?: IMenuItem[];
}

export const CheckBoxMenu = ({
  children,
  list,
  onChange,
  checkedItems = [],
}: IMenuProps) => {
  const id = useId();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          const isCheck = checkedItems.find((item) => item.id === id);

          if (label === 'divider') {
            return <Divider key={id} />;
          }
          return (
            <MenuItem
              key={id}
              {...el}>
              <Checkbox
                checkboxProps={{
                  onClick: (e) => {
                    const inputChecked = (e.target as any).checked;
                    const item: ICheckedItem = {
                      label,
                      id,
                    };

                    let newItems = [...checkedItems];

                    if (inputChecked) {
                      newItems.push(item);
                    } else {
                      newItems = newItems.filter((el) => el.id !== item.id);
                    }

                    onChange(newItems);
                  },
                  checked: !!isCheck?.id,
                }}
                label={
                  <MenuWrapper>
                    <Typography variant={'title.medium'}>{label}</Typography>
                    {icon}
                  </MenuWrapper>
                }
              />
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
