import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePath } from 'src/shared/hooks/usePath';
import { PlusCircleIcon } from 'src/shared/icons';
import { Typography } from 'src/shared/ui';
import { TabsVar3 } from 'src/shared/ui/Tabs/TabsVar3';

import { tabVariantId, viewItems } from '../../../../constants';

export const Setting = () => {
  const path = usePath();

  const navigate = useNavigate();

  return (
    <Wrapper>
      <InfoWrapper>
        <Typography
          variant={'body.medium'}
          color={'alert.alert-gray'}>
          Нашлось
        </Typography>
        <Typography
          variant={'body.medium'}
          bold
          color={'Accent.Primary'}>
          100
        </Typography>
        <Typography
          variant={'body.medium'}
          color={'alert.alert-gray'}>
          пользователей
        </Typography>
      </InfoWrapper>
      <TabsVar3
        name={tabVariantId}
        items={viewItems}
      />
      <Button
        onClick={() => {
          navigate(path.protectedPaths.iisuno.administration.createUser());
        }}
        variant={'contained'}
        startIcon={<PlusCircleIcon />}>
        Создать пользователя
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const InfoWrapper = styled(Box)`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  user-select: none;
`;
