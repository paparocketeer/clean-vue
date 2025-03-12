import { useAppDispatch } from 'src/shared/hooks/useAppDispatch';
import {
  onClearPoints,
  onRemovePoint,
  onSelectAll,
  onSelectPoints,
} from 'src/shared/store/slices/groupItem';

export const useHandleControllers = () => {
  const dispatch = useAppDispatch();

  const selectPoint = (point: any) => {
    dispatch(onSelectPoints(point));
  };

  const removePoint = (point: any) => {
    dispatch(onRemovePoint(point));
  };

  const clearPoints = () => {
    dispatch(onClearPoints());
  };
  const selectAll = (points: any[]) => {
    dispatch(onSelectAll(points));
  };

  return { selectPoint, removePoint, clearPoints, selectAll };
};
