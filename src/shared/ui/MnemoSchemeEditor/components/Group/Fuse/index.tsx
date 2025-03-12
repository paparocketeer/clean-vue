import styled from '@emotion/styled';
import { Button, Popover } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { CheckCircleIcon, FuseEditorIcon } from 'src/shared/icons';

import { Input } from '../../../../base/Input';
import { Typography } from '../../../../base/Typography';
import { Line } from './Line';
import { IFuseProps } from './types';

export const Fuse = ({ title, subtitle, contactorVariant }: IFuseProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Wrapper
        aria-describedby={id}
        onClick={(event) => {
          setAnchorEl((event as any).currentTarget);
        }}>
        <FuseEditorIcon variant={'small'} />
        <TextWrapper>
          <TextInner>
            <Text>{title}</Text>
            <Text
              style={{
                color: '#6B7C84',
              }}>
              {subtitle}
            </Text>
          </TextInner>
          <Text>В</Text>
        </TextWrapper>
        <Line variant={contactorVariant} />
      </Wrapper>

      <Popover
        id={id}
        sx={{
          '.MuiPaper-root': {
            width: '290px',
            borderRadius: '16px',
            boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.15)',
          },
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}>
        <PopoverInner>
          <PopoverTitle>
            <Typography variant={'title.medium'}>Предохранитель</Typography>
            <Typography
              variant={'title.medium'}
              bold
              color={'Accent.Primary'}>
              {title}
            </Typography>
          </PopoverTitle>
          <Divider />
          <PopoverActions>
            <Button
              endIcon={<CheckCircleIcon />}
              sx={{
                width: '100%',
              }}
              variant={'outlined'}
              onClick={handleClose}>
              Вечер
            </Button>
            <Button
              endIcon={<CheckCircleIcon />}
              sx={{
                width: '100%',
              }}
              variant={'outlined'}
              onClick={handleClose}>
              Ночь
            </Button>
            <Button
              endIcon={<CheckCircleIcon />}
              sx={{
                width: '100%',
              }}
              variant={'outlined'}
              onClick={handleClose}>
              Резервная
            </Button>
            <Button
              endIcon={<CheckCircleIcon />}
              sx={{
                width: '100%',
              }}
              variant={'outlined'}
              onClick={handleClose}>
              Отключить
            </Button>
          </PopoverActions>
          <Divider />
          <PopoverSubmit>
            <PopoverSubmitTitle>
              <Typography variant={'title.medium'}>
                Описание направления
              </Typography>
            </PopoverSubmitTitle>
            <Input
              sx={{
                borderRadius: '16px',
              }}
              inputProps={{
                multiline: true,
                maxRows: 3,
                minRows: 3,
                placeholder: 'Введите текст описания',
              }}
            />
          </PopoverSubmit>
          <PopoverSubmitActions>
            <Button
              sx={{ width: '100%' }}
              variant={'contained'}>
              Очистить
            </Button>
            <Button
              sx={{ width: '100%' }}
              variant={'contained'}>
              Добавить
            </Button>
          </PopoverSubmitActions>
        </PopoverInner>
      </Popover>
    </>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  gap: 2px;
  width: 40px;
  position: relative;
  cursor: pointer;
`;
const TextWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 9px;
`;
const TextInner = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const Text = styled(Box)`
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.12px;
`;

const PopoverInner = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PopoverTitle = styled(Box)`
  display: flex;
  padding: 10px 12px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

const Divider = styled(Box)`
  border-bottom: 1px solid #d2d5db;
  height: 1px;
  width: 100%;
`;

const PopoverActions = styled(Box)`
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const PopoverSubmit = styled(Box)`
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const PopoverSubmitTitle = styled(Box)`
  display: flex;
  width: 100%;
  padding: 8px 12px;
  align-items: center;
  gap: 4px;
`;

const PopoverSubmitActions = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  gap: 8px;
`;
