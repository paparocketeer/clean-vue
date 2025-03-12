import { IControllerStatisticRes } from 'src/shared/store/api/controllers/controllers.types';

import { MediumPoint } from './MediumPoint';
import { SmallPoint } from './SmallPoint';

interface IPointsItem {
  data: IControllerStatisticRes['items'][number];
  withOneLetter: boolean;
  compactView: boolean;
  withAddresses: boolean;
  pointsIds: Record<string, IControllerStatisticRes['items'][number]>;
  groupId?: string | number;
}
export const PointsItem = ({
  data,
  compactView,
  withAddresses,
  groupId,
  ...rest
}: IPointsItem) => {
  if (compactView) {
    return (
      <SmallPoint
        data={data}
        groupId={groupId}
        withAddresses={withAddresses}
        {...rest}
      />
    );
  }

  return (
    <MediumPoint
      data={data}
      groupId={groupId}
      withAddresses={withAddresses}
      {...rest}
    />
  );
};
