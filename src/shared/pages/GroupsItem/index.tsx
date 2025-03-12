import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHandleBreadcrumbs } from 'src/shared/actions/breadcrumbs';
import { ProtectedPage } from 'src/shared/hoc';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import { usePath } from 'src/shared/hooks/usePath';
import { SearchBlock } from 'src/shared/ui';

import { ILocalGroupControllerItem } from '../../store/api/controllers/controllers.types';
import { selectGroupsItem } from '../../store/selectors/groupItem';
import { selectGroups } from '../../store/selectors/groups';
import { GroupsList } from '../Groups/constants/GroupsList';
import { Controls } from './components/Controls';
import { Filters } from './components/Filters';
import { PointsGroup } from './components/PointsGroup';

const GroupsItem = () => {
  const { groupId } = useParams();
  const { protectedPaths } = usePath();
  const { points } = useAppSelector(selectGroupsItem);
  const { groups } = useAppSelector(selectGroups);
  const point = points[groupId as any];
  const { handleBreadcrumbs } = useHandleBreadcrumbs();

  useEffect(() => {
    handleBreadcrumbs([
      {
        text: 'Управление НО',
        path: protectedPaths.iisuno.groups.index(),
      },
      {
        text: isNaN(Number(groupId))
          ? GroupsList[groupId as any].text
          : groups?.[Number(groupId)]?.name || '',
        path: protectedPaths.iisuno.groups.controller(),
      },
    ]);
  }, [JSON.stringify(groups)]);

  return (
    <ProtectedPage>
      <MemoWrapper points={point ? point : points['0']} />
    </ProtectedPage>
  );
};

export default GroupsItem;

const MemoWrapper = memo(
  ({ points }: { points: ILocalGroupControllerItem }) => {
    return (
      <Wrapper>
        <Filters />
        <Controls />
        <SearchBlock />
        <PointsGroup
          name={'outExploitation'}
          open={true}
          data={points.outExploitation}
          title={'Аварийные ШУНО'}
        />
        <PointsGroup
          name={'exploitation'}
          open={true}
          data={points.exploitation}
          title={'ШУНО в эксплуатации'}
        />
        <PointsGroup
          name={'warning'}
          open={false}
          data={points.warning}
          title={'ШУНО выведенные из эксплуатации'}
        />
      </Wrapper>
    );
  },
  (prevProps, nextProps) => {
    return (
      JSON.stringify(prevProps.points) === JSON.stringify(nextProps.points)
    );
  }
);
const Wrapper = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 15px;
`;
