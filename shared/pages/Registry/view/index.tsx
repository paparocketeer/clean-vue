import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import { usePath } from 'src/shared/hooks/usePath';

import { useHandleBreadcrumbs } from '../../../actions/breadcrumbs';
import { RegistryItem } from '../components';

const Registry = () => {
  const { handleBreadcrumbs } = useHandleBreadcrumbs();
  const { protectedPaths } = usePath();

  const registryList = [
    {
      label: 'Контроллеры',
      desc: 'Краткое описание группы реестра, в которой можно перейти в конкретный реестр.',
      link: protectedPaths.iisuno.registry.controllersSHUNO.index(),
      id: 'controllers',
    },
    {
      label: 'Объекты НО',
      desc: 'Краткое описание группы реестра, в которой можно перейти в конкретный реестр.',
      link: protectedPaths.iisuno.registry.objectsNO.index(),
      id: 'objects',
    },
  ];

  useEffect(() => {
    handleBreadcrumbs([
      {
        text: 'Реестры',
        path: protectedPaths.iisuno.registry.index(),
      },
    ]);
  }, []);

  return (
    <Wrapper>
      {registryList.map((el) => {
        return (
          <RegistryItem
            {...el}
            key={el.id}
          />
        );
      })}
    </Wrapper>
  );
};
export default Registry;
const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 16px;
  padding: 10px;
`;
