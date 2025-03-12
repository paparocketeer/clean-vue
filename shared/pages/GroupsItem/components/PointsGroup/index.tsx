import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useHandleControllers } from 'src/shared/actions/groups/controllers';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import { IControllerStatisticRes } from 'src/shared/store/api/controllers/controllers.types';
import { selectGroupsItem } from 'src/shared/store/selectors/groupItem';
import { selectGroupControllersSetting } from 'src/shared/store/selectors/setting/groups/controllers';
import { Block } from 'src/shared/ui';

import { execControllersCommand } from '../../../../store/api/controllers/controllers';
import { findInParent } from '../../../../utils/findInParent';
import {
  actionTypes,
  changeActionVariants,
  checkBoxActionVariants,
} from '../../constants';
import { PointsItem } from './components/PointsItem';

interface IPointsGroupProps {
  name: string;
  open: boolean;
  title?: string;
  data: Record<number, IControllerStatisticRes['items'][number]>;
}

export const PointsGroup = ({ title, open, name, data }: IPointsGroupProps) => {
  const { compactView, withAddresses } = useAppSelector((state) =>
    selectGroupControllersSetting(state)
  );
  const { selectedPointsIds } = useAppSelector(selectGroupsItem);
  const { groupId } = useParams();
  const { selectPoint, removePoint } = useHandleControllers();

  return (
    <Block
      onClick={(event: any) => {
        event.stopPropagation();

        const controlAction = findInParent(event.target, 'data-type');

        switch (controlAction) {
          case actionTypes['check-box-action']:
            const checked = event.target.checked;
            const id = findInParent(
              event.target,
              checkBoxActionVariants['data-checked-id']
            );
            const point = data?.[Number(id)];

            if (point) {
              if (checked) {
                selectPoint(point);
              } else {
                removePoint(point);
              }
            }
            return;
          case actionTypes['change-action']:
            const shunoId = findInParent(
              event.target,
              changeActionVariants['shuno-id']
            );
            const type = findInParent(
              event.target,
              changeActionVariants['toggle-shuno-type']
            );
            const status = findInParent(
              event.target,
              changeActionVariants['toggle-shuno-status']
            );

            execControllersCommand({
              ctl_ids: [Number(shunoId)],
              command: 'switch_light',
              params: {
                state: type,
                contactor: status,
              },
            });
            return;
          default:
            return;
        }
      }}
      withHide={true}
      open={open}
      title={title}>
      <Inner>
        {Object.values(data).map((point) => {
          return (
            <PointsItem
              groupId={groupId}
              pointsIds={selectedPointsIds}
              compactView={compactView}
              withAddresses={withAddresses}
              data={point}
              key={`${name}-${point.id}`}
              withOneLetter={false}
            />
          );
        })}
      </Inner>
    </Block>
  );
};

const Inner = styled(Box)`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: 16px;
`;

/**import styled from '@emotion/styled';
 import Box from '@mui/material/Box';
 import React, { useEffect, useRef, useState } from 'react';
 import { useParams } from 'react-router-dom';
 import { FixedSizeList } from 'react-window';
 import { Block } from 'src/shared/ui';

 import { useHandlePPGroup } from 'src/shared/actions/management/PPGroup';
 import { useSelectPPGroup } from 'src/shared/selectors/management/PPGroup';
 import { useSelectMNOGroupSetting } from 'src/shared/selectors/settings/groupsGroup';
 import { IControllerStatistic } from 'src/shared/types/controllers/controllersStatistic';
 import { PointsItem } from './components/PointsItem';

 interface IPointsGroupProps {
 open: boolean;
 title?: string;
 data?: IControllerStatistic[];
 }

 const testData: IControllerStatistic[] = [];
 for (let i = 0; i < 300000; i++) {
 testData.push({
 ie_enable_night: false,
 contactor_count: 1,
 dont_disable: false,
 dont_enable: false,
 with_one_letter: false,
 is_locked: false,
 line_failure: false,
 outgoing_lines_alarm: false,
 input_alarm: false,
 cabinet_door_open: false,
 station_door_open: false,
 name: `test name ${i}`,
 in_exploitation: false,
 night_cont_state: false,
 evening_cont_state: false,
 lamp_error: false,
 address: 'Moscow',
 alarm: false,
 id: 150 + i,
 connected: true,
 fire_alarm: false,
 });
 }

 const PADDING_SIZE = 16;
 const gap = 32;
 const itemSize = 90;

 export const PointsGroup = ({ title, data, open }: IPointsGroupProps) => {
 const [items, setItems] = useState<IControllerStatistic[][]>([]);
 const { compactView } = useSelectMNOGroupSetting();
 const { withAddresses } = useSelectMNOGroupSetting();
 const { pointsIds } = useSelectPPGroup();
 const { groupId } = useParams();
 const { selectPoint, removePoint } = useHandlePPGroup();

 const Row = ({ index, style }) => {
 return (
 <RowWrapper
 style={{
 ...style,
 top:
 index === 0 ? style.top : Number(style.top) + index * PADDING_SIZE,
 }}>
 {items[index]?.map((point) => (
 <PointsItem
 groupId={groupId}
 pointsIds={pointsIds}
 compactView={compactView}
 withAddresses={withAddresses}
 data={point}
 key={point.id}
 withOneLetter={point.with_one_letter}
 dontEnable={point.dont_enable}
 dontDisable={point.dont_disable}
 oneContactor={point.contactor_count === 1}
 isEnableNight={point.ie_enable_night}
 />
 ))}
 </RowWrapper>
 );
 };

 const ref = useRef<HTMLDivElement | null>(null);
 const width = ref.current?.offsetWidth || 0;
 const height = ref.current?.offsetHeight ? ref.current?.offsetHeight - 34 : 0;

 useEffect(() => {
 const itemsCount = Math.floor((width - 5) / (itemSize + gap));
 const dataCount = testData.length;
 const itarCount = Math.round(dataCount / itemsCount);

 const res: any = [];
 let start = 0;
 let end = itemsCount;
 for (let i = 0; i < itarCount; i++) {
 res[i] = testData.slice(start, end);
 start = start + itemsCount;
 end = end + itemsCount;
 }
 setItems(res);
 }, [width]);

 return (
 <div
 ref={ref}
 style={{
 height: '100%',
 }}>
 <Block
 onClick={(event) => {
 if (event.target.type) {
 const attrs = event.target.attributes as NamedNodeMap;
 const id = attrs.getNamedItem('data-checked-id').value;
 }
 }}
 withHide={true}
 open={open}
 title={title}>
 <FixedSizeList
 height={height}
 width={width}
 itemSize={itemSize}
 itemCount={items.length}>
 {Row}
 </FixedSizeList>
 </Block>
 </div>
 );
 };

 const RowWrapper = styled(Box)`
 display: flex;
 width: 100%;
 align-items: flex-start;
 align-content: flex-start;
 gap: 16px;
 `;
 **/
