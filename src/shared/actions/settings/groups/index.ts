import { useAppDispatch } from 'src/shared/hooks/useAppDispatch';
import {
  onCompactView,
  onWithAccidents,
  onWithGroupName,
} from 'src/shared/store/slices/groups/setting';

export const useHandleSettingGroups = () => {
  const dispatch = useAppDispatch();

  const handleWithAccidents = (status: boolean) =>
    dispatch(onWithAccidents({ status }));
  const handleOnWithGroupName = (status: boolean) =>
    dispatch(onWithGroupName({ status }));
  const handleOnCompactView = (status: boolean) =>
    dispatch(onCompactView({ status }));

  return {
    handleWithAccidents,
    handleOnWithGroupName,
    handleOnCompactView,
  };
};
