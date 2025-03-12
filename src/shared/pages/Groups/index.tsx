import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React, { memo, useEffect } from 'react';
import { useHandleBreadcrumbs } from 'src/shared/actions/breadcrumbs';
import { ProtectedPage } from 'src/shared/hoc';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import { usePath } from 'src/shared/hooks/usePath';
import { selectGroupsSetting } from 'src/shared/store/selectors/setting/groups';

import { TLocalGroupItem } from '../../store/api/groups/groups.types';
import { selectGroups } from '../../store/selectors/groups';
import { CompactView, Filters, FullView } from './components';

const Groups = () => {
  const groups = useAppSelector((state) => selectGroups(state));
  const { protectedPaths } = usePath();
  const { handleBreadcrumbs } = useHandleBreadcrumbs();

  useEffect(() => {
    handleBreadcrumbs([
      {
        text: 'Управление НО',
        path: protectedPaths.iisuno.groups.index(),
      },
    ]);
  }, []);

  return (
    <ProtectedPage>
      <MemoWrapper groups={groups.groups} />
    </ProtectedPage>
  );
};

const MemoWrapper = memo(
  ({ groups }: { groups: Record<number, TLocalGroupItem> }) => {
    const { compactView } = useAppSelector((state) =>
      selectGroupsSetting(state)
    );
    return (
      <Wrapper>
        <Filters />
        {compactView ? (
          <CompactView data={groups} />
        ) : (
          <FullView data={groups} />
        )}
      </Wrapper>
    );
  },
  (prevProps, nextProps) => {
    if (JSON.stringify(prevProps.groups) !== JSON.stringify(nextProps.groups)) {
      return false;
    }
    return true;
  }
);

export default Groups;
const Wrapper = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  border-radius: 15px;
  padding: 10px;

  overflow-x: hidden;
  overflow-y: auto;
`;
