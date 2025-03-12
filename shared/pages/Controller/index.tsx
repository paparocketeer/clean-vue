import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHandleBreadcrumbs } from 'src/shared/actions/breadcrumbs';
import { useAppDispatch } from 'src/shared/hooks/useAppDispatch';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import { usePath } from 'src/shared/hooks/usePath';
import { selectController } from 'src/shared/store/selectors/controller';
import { selectGroups } from 'src/shared/store/selectors/groups';
import { fetchControllerById } from 'src/shared/store/slices/controller';

import { ContentBlock } from './components/ContentBlock';
import { ControllerBlock } from './components/ControllerBlock';

const ControllerItem = () => {
  const { groupId, controllerId } = useParams();

  const { handleBreadcrumbs } = useHandleBreadcrumbs();
  const { protectedPaths } = usePath();
  const dispatch = useAppDispatch();
  const controllerData = useAppSelector((state) => selectController(state));

  const { groups } = useAppSelector((state) => selectGroups(state));

  useEffect(() => {
    dispatch(fetchControllerById(controllerId));
  }, []);

  useEffect(() => {
    if (controllerData?.name) {
      handleBreadcrumbs([
        {
          text: 'Управление НО',
          path: protectedPaths.iisuno.groups.index(),
        },
        {
          text: groups?.[Number(groupId)]?.name || '',
          path: protectedPaths.iisuno.groups.groupItem(groupId),
        },
        {
          text: controllerData?.name,
          path: protectedPaths.iisuno.groups.controller(groupId, controllerId),
        },
      ]);
    }
  }, [controllerData?.name]);

  return (
    <Wrapper>
      <ControllerBlock />
      <ContentBlock />
    </Wrapper>
  );
};

export default ControllerItem;
const Wrapper = styled(Box)`
  display: flex;
  width: 100%;
  gap: 10px;
  overflow: auto;
  border-radius: 15px;
  padding: 10px;
`;
