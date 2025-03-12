import Alert from '@mui/material/Alert';
import {
  AlertColor,
  AlertPropsColorOverrides,
} from '@mui/material/Alert/Alert';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import { OverridableStringUnion } from '@mui/types';
import React, { ReactNode, useEffect, useState } from 'react';

import styled from './styled.module.scss';

export interface INotificationProps {
  message: ReactNode;
  open?: boolean;
  variant?: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
}

export const NotificationComponent = ({
  message,
  open,
  variant = 'success',
}: INotificationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = (_?: unknown, reason?: string) => {
    if (reason === 'clickaway') {
      setIsOpen(false);

      return;
    }
  };

  useEffect(() => {
    setIsOpen(!!open);
  }, [open]);

  return (
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      TransitionComponent={Slide}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}>
      <Alert
        className={styled.alert}
        classes={{
          action: styled.alertAction,
        }}
        onClose={handleClose}
        severity={variant}
        sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
