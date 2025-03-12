import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProtectedPage } from 'src/shared/hoc';

import { PATHS } from '../../../constants';
import { useHandleBreadcrumbs } from '../../actions/breadcrumbs';
import { usePath } from '../../hooks/usePath';
import { UsersLogoIcon } from '../../icons';
import { CardBlock } from '../../ui';

const Administration = () => {
  const { protectedPaths } = usePath();
  const navigate = useNavigate();

  const { handleBreadcrumbs } = useHandleBreadcrumbs();

  useEffect(() => {
    handleBreadcrumbs([
      {
        text: 'Администрирование',
        path: protectedPaths.iisuno.administration.index(),
      },
    ]);
  }, []);

  return (
    <ProtectedPage>
      <Wrapper>
        <CardBlock
          icon={<UsersLogoIcon />}
          label={'Пользователи'}
          desc={
            'Краткое описание группы реестра, в которой можно перейти в конкретный реестр.  '
          }
          onClick={() => {
            navigate(PATHS.protected.iisuno.administration.users());
          }}
        />
      </Wrapper>
    </ProtectedPage>
  );
};
const Wrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 10px;
`;
export default Administration;
