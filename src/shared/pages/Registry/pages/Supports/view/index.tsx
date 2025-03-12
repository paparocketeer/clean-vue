import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import { useHandleBreadcrumbs } from 'src/shared/actions/breadcrumbs';
import { usePath } from 'src/shared/hooks/usePath';

const Supports = () => {
  const { handleBreadcrumbs } = useHandleBreadcrumbs();
  const { protectedPaths } = usePath();

  useEffect(() => {
    handleBreadcrumbs([
      {
        text: 'Реестры',
        path: protectedPaths.iisuno.registry.index(),
      },
      {
        text: 'Опоры',
        path: protectedPaths.iisuno.registry.supports.index(),
      },
    ]);
  }, []);

  return <Wrapper></Wrapper>;
};

export default Supports;
const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  background: ${(p) => p.theme.palette.colors.White};
  border-radius: 15px;
  overflow: scroll;
  height: 100%;
`;
