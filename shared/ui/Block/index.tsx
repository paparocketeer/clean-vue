import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import React, { MouseEventHandler } from 'react';
import { Typography } from 'src/shared/ui';

interface IBlock {
  children?: React.ReactNode;
  title?: string;
  withHide?: boolean;
  open?: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}
export const Block = ({
  children,
  title,
  withHide = true,
  open = false,
  onClick,
}: IBlock) => {
  const [checked, setChecked] = React.useState(open);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Wrapper onClick={onClick}>
      <Title>
        <div />
        <Typography
          variant={'title.large'}
          bold>
          {title}
        </Typography>
        {withHide ? (
          <FormControlLabel
            control={
              <Switch
                sx={{
                  marginRight: '6px',
                }}
                checked={checked}
                color='primary'
                onClick={handleChange}
              />
            }
            label={'Скрыть'}
            labelPlacement='end'
          />
        ) : (
          <div />
        )}
      </Title>
      <Collapse
        sx={{ width: '100%' }}
        in={checked}>
        {children}
      </Collapse>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  border-radius: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  align-self: stretch;
`;

const Title = styled(Box)`
  background: #ffffff;
  border-radius: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 15px 4px 4px;
`;
