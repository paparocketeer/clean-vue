import { Box, IconButton } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { CSSObject, styled, Theme } from '@mui/material/styles';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { usePath } from 'src/shared/hooks/usePath';
import { ExitIcon, LArrowIcon, MailIcon, PhoneIcon } from 'src/shared/icons';
import { Typography } from 'src/shared/ui';
import { clearStorage } from 'src/shared/utils/storage';
import { useAppDispatch } from 'src/shared/hooks/useAppDispatch';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import { selectUserById } from 'src/shared/store/selectors/users';
import { logOutUser } from 'src/shared/store/slices/users';

const drawerWidth = 247;
const closedDrawerWidth = 68;

interface IOpenProps {
  open?: boolean;
  active?: boolean;
}

export const Sidebar = () => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState(true);
  const { pathname } = useLocation();

  const { navigationList, utilityList } = usePath();
  const handleDrawerToggle = () => {
    setOpen((prev) => !prev);
  };
  const data = useAppSelector(selectUserById);
  return (
    <Drawer
      open={open}
      sx={{
        flexShrink: 0,
        height: '100%',
        '& .MuiDrawer-paper': {
          position: 'static',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          '::-webkit-scrollbar': {
            width: 0,
          },
        },
        '& .MuiPaper-root': {
          border: 'none',
        },
      }}
      variant='permanent'
      anchor='left'>
      <SList>
        <SListItem
          open={open}
          key={'Спрятать'}
          disablePadding
          sx={{
            marginBottom: '34px',
          }}>
          <SListItemButton
            open={open}
            onClick={handleDrawerToggle}>
            <SListItemIcon
              sx={{
                transform: open ? 'rotate(0deg)' : 'rotate(180deg)',
              }}
              open={open}>
              <LArrowIcon />
            </SListItemIcon>
            <SListItemText
              primary={'Спрятать'}
              open={open}
            />
          </SListItemButton>
        </SListItem>

        {navigationList.map((el) => {
          const active = pathname.includes(el.path);

          return (
            <SListItem
              open={open}
              key={el.text}
              disablePadding
              active={active}
              sx={{
                marginBottom: '10px',
              }}>
              <Link
                style={{ width: '100%' }}
                to={el.path}>
                <SListItemButton open={open}>
                  <SListItemIcon active={active}>{el.icon}</SListItemIcon>
                  <SListItemText
                    sx={{
                      color: active ? 'white' : 'black',
                    }}
                    primary={el.text}
                    open={open}
                  />
                </SListItemButton>
              </Link>
            </SListItem>
          );
        })}
      </SList>
      <SList>
        {utilityList.map((el) => {
          const active = pathname.includes(el.path);

          return (
            <SListItem
              open={open}
              key={el.text}
              disablePadding
              active={active}
              sx={{
                marginBottom: '10px',
              }}>
              <Link
                style={{ width: '100%' }}
                to={el.path}>
                <SListItemButton open={open}>
                  <SListItemIcon active={active}>{el.icon}</SListItemIcon>
                  <SListItemText
                    sx={{
                      color: active ? 'white' : 'black',
                    }}
                    primary={el.text}
                    open={open}
                  />
                </SListItemButton>
              </Link>
            </SListItem>
          );
        })}
        {open && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
            <Box
              sx={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <a href='tel:+7 (495) 161-65-61'>
                <IconButton
                  sx={{
                    background: '#B5D4FF',
                    width: '32px',
                    height: '32px',
                    color: '#000000',
                  }}
                  aria-label='home'>
                  <PhoneIcon />
                </IconButton>
              </a>
              <a href='mailto:iiusno_support@mos.ru'>
                <IconButton
                  sx={{
                    background: '#B5D4FF',
                    width: '32px',
                    height: '32px',
                    color: '#000000',
                  }}
                  aria-label='home'>
                  <MailIcon />
                </IconButton>
              </a>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '8px',
              }}>
              <a href='tel:+74951616561'>
                <Typography
                  variant={'caption.medium'}
                  bold
                  color={'colors.Black'}>
                  +7 (495) 161-65-61
                </Typography>
              </a>
              <a href='mailto:iiusno_support@mos.ru'>
                <Typography
                  variant={'caption.medium'}
                  bold
                  color={'colors.Black'}>
                  iiusno_support@mos.ru
                </Typography>
              </a>
            </Box>
          </Box>
        )}
        <SListItem
          open={open}
          disablePadding>
          <SListItemButton
            open={open}
            onClick={() => {
              dispatch(logOutUser({ id: data.id }));
              window.keyCloak?.logout();
              clearStorage();
            }}>
            <SListItemIcon>
              <ExitIcon />
            </SListItemIcon>
            <SListItemText
              primary={'Выйти'}
              open={open}
            />
          </SListItemButton>
        </SListItem>
      </SList>
    </Drawer>
  );
};

const openedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  width: drawerWidth,
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: closedDrawerWidth,
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  alignItems: 'start',
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  marginRight: '8px',
  '.MuiDrawer-paper': {
    top: '100px',
    left: '4px',
    backgroundColor: '#E7F1FF',
    borderRadius: '15px',
  },

  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const SList = styled(List)`
  padding: 8px;
`;

const SListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ active, open }: IOpenProps) => ({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'start',
  background: active ? '#0F74FF' : '#ffffff',
  transition: 'all .3s',
  borderRadius: '50px',

  ...(!open
    ? {
        maxWidth: '48px',
        maxHeight: '48px',
      }
    : {
        maxWidth: '1000px',
        maxHeight: '1000px',
      }),

  '.MuiButtonBase-root': {
    display: 'flex',
    alignItems: 'start',
    borderRadius: '50px',
    padding: '8px',

    ':hover': {
      borderRadius: '50px',
    },
  },
}));

const SListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ open }: IOpenProps) => ({
  minHeight: 48,
  justifyContent: open ? 'initial' : 'center',
  px: 2.5,
  gap: open ? '10px' : 0,
  width: '100%',
}));

const SListItemIcon = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ open, active }: IOpenProps) => ({
  minWidth: '0',
  width: '32px',
  height: '32px',
  justifyContent: 'center',
  mr: open ? 3 : 'auto',
  backgroundColor: '#0F74FF',
  borderRadius: '50px',
  display: 'flex',
  alignItems: 'center',
  transition: '.3s',
  color: '#FFFFFF',
  ...(active
    ? {
        backgroundColor: '#FFFFFF',
        color: '#0F74FF',
      }
    : {}),
}));

const SListItemText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ open }: IOpenProps) => ({
  maxWidth: open ? '160px' : '0',
  transition: 'all .3s',
  overflow: 'hidden',
}));
