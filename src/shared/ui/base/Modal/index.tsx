import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiModal from '@mui/material/Modal';
import { ModalProps } from '@mui/material/Modal/Modal';
import * as React from 'react';
import { ReactNode } from 'react';
import { OutlineCloseIcon } from 'src/shared/icons';

import { Typography } from '../Typography';

interface IModalProps extends Omit<ModalProps, 'children'> {
  children: ReactNode;
  title: string;
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
  onAccept: React.MouseEventHandler<HTMLButtonElement>;
  cancelText?: string;
  acceptText?: string;
  withClose?: boolean;
  blueBackdrop?: boolean;
}

export const Modal = ({
  children,
  title,
  onCancel,
  onAccept,
  acceptText = 'Приянть',
  cancelText = 'Отменить',
  blueBackdrop = false,
  withClose = true,
  ...props
}: IModalProps) => {
  return (
    <MuiModal
      sx={{
        '.MuiBackdrop-root': blueBackdrop
          ? {
              background: 'rgba(15, 116, 255, 0.50)',
              backdropFilter: 'blur(6px)',
            }
          : {},
      }}
      {...props}>
      <Wrapper>
        <Title>
          <div />
          <Typography
            variant={'title.large'}
            bold>
            {title}
          </Typography>
          {withClose ? (
            <IconButton>
              <OutlineCloseIcon color={'#0F74FF'} />
            </IconButton>
          ) : (
            <div />
          )}
        </Title>
        <Content>{children}</Content>
        <Actions>
          <Button
            onClick={onCancel}
            style={{
              width: '165px',
            }}
            size={'large'}
            variant={'outlined'}>
            {cancelText}
          </Button>
          <Button
            onClick={onAccept}
            style={{
              width: '165px',
            }}
            size={'large'}
            variant={'contained'}>
            {acceptText}
          </Button>
        </Actions>
      </Wrapper>
    </MuiModal>
  );
};

const Wrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 32px;
  background: #ffffff;
  min-width: 600px;
  max-width: 800px;
  border: none;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.15);
`;

const Title = styled(Box)`
  border-bottom: 1px solid #91bfff;
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled(Box)`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 24px;
  text-wrap: wrap;
  word-break: break-all;
  overflow: hidden;
`;

const Actions = styled(Box)`
  border-top: 1px solid #91bfff;

  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;
