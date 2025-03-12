import styled from '@emotion/styled';
import { Button, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from 'src/constants';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import { HomeIcon } from 'src/shared/icons/Home';
import { Slash } from 'src/shared/icons/Slash';
import { selectBreadcrumbs } from 'src/shared/store/selectors/breadcrumbs';
import { Typography } from 'src/shared/ui';

interface IBreadcrumbProps {
  active?: boolean;
}

export const Breadcrumbs = () => {
  const { breadcrumbs } = useAppSelector((state) => selectBreadcrumbs(state));
  return (
    <Wrapper>
      <Link to={PATHS.protected.iisuno.groups.index()}>
        <HomeButton aria-label='home'>
          <HomeIcon
            height={'20px'}
            width={'20px'}
          />
        </HomeButton>
      </Link>
      {breadcrumbs.map((el, i) => {
        const isLastItem = breadcrumbs.length === i + 1;
        if (!el?.text) {
          return <></>;
        }
        return (
          <React.Fragment key={el?.path}>
            <Link
              key={el?.path}
              to={el?.path}>
              <Item
                style={{ textTransform: 'none' }}
                active={isLastItem}>
                <Typography variant={'title.medium'}>{el?.text}</Typography>
              </Item>
            </Link>
            {!isLastItem && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#ffffff',
                  borderRadius: '50px',
                  color: '#000000',
                  width: '32px',
                  height: '32px',
                  padding: '8px',
                }}>
                <Slash />
              </Box>
            )}
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: start;
  background: #e7f1ff;
  border-radius: 50px;
  padding: 4px;
  height: 40px;
  width: 100%;
`;

const Item = styled(Button)(({ active }: IBreadcrumbProps) => ({
  backgroundColor: active ? '#b5d4ff' : '#ffffff',
  borderRadius: '50px',
  color: '#000000',
  padding: '8px 16px',
  height: '32px',
}));

const HomeButton = styled(IconButton)`
  background: ${(p) => p.theme.palette.colors.White};
  border-radius: 100px;
  margin-right: 8px;
  padding: 6px;
`;
