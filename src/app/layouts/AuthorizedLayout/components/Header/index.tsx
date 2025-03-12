import styled from '@emotion/styled';
import { IconButton, useTheme } from '@mui/material';
import React from 'react';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import { BellIcon, LogoIcon, MailIcon, SearchIcon } from 'src/shared/icons';
import { selectFIO } from 'src/shared/store/selectors/user';
import { Avatar, ThemeSwitch, Typography } from 'src/shared/ui';

export const Header = () => {
  const fio = useAppSelector((state) => selectFIO(state));
  const { palette } = useTheme();

  return (
    <Wrapper>
      <Left>
        <LogoWrapper>
          <LogoIcon
            width={26}
            height={26}
          />
        </LogoWrapper>
        <TitleWrapper>
          <Typography
            variant={'title.large'}
            bold>
            ИИУСНО
          </Typography>
          <Typography variant={'body.small'}>
            Интегрированная информационно-управляющая система наружного
            освещения
          </Typography>
        </TitleWrapper>
      </Left>
      <Right>
        <IconButton
          sx={{ background: '#ffffff', width: '40px', height: '40px' }}
          aria-label='mail'>
          <SearchIcon
            color={palette.colors.Black}
            width={20}
            height={20}
          />
        </IconButton>
        <IconButton
          sx={{ background: '#ffffff', width: '40px', height: '40px' }}
          aria-label='mail'>
          <MailIcon
            color={palette.colors.Black}
            width={20}
            height={20}
          />
        </IconButton>
        <IconButton
          sx={{ background: '#ffffff', width: '40px', height: '40px' }}
          aria-label='notify'>
          <BellIcon
            color={palette.colors.Black}
            width={20}
            height={20}
          />
        </IconButton>
        <ThemeSwitch />
        <AvatarWrapper>
          <Avatar
            variant={'text'}
            width={'32px'}
            height={'32px'}
          />
          <TitleWrapper>
            <Typography
              variant={'title.small'}
              bold>
              {fio}
            </Typography>
            <Typography variant={'body.small'}>Диспетчер</Typography>
          </TitleWrapper>
        </AvatarWrapper>
      </Right>
    </Wrapper>
  );
};

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background: #e7f1ff;
  border-radius: 50px;
  padding: 4px;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
`;

const LogoWrapper = styled.div`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AvatarWrapper = styled.div`
  display: flex;
  padding: 4px;
  gap: 4px;
  height: 40px;
  border-radius: 50px;
  align-items: center;
  background: #ffffff;
`;
