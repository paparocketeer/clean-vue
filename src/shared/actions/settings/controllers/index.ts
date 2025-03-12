import { useAppDispatch } from 'src/shared/hooks/useAppDispatch';
import {
  onCompactView,
  onWithAddresses,
  onWithControlPanel,
  onWithJournal,
  onWithMap,
} from 'src/shared/store/slices/groupItem/setting';

export const useHandleSettingControllers = () => {
  const dispatch = useAppDispatch();

  const handleOnWithControlPanel = (status: boolean) =>
    dispatch(onWithControlPanel({ status }));
  const handleOnWithAddresses = (status: boolean) =>
    dispatch(onWithAddresses({ status }));
  const handleOnCompactView = (status: boolean) =>
    dispatch(onCompactView({ status }));
  const handleOnWithJournal = (status: boolean) =>
    dispatch(onWithJournal({ status }));
  const handleOnWithMap = (status: boolean) => dispatch(onWithMap({ status }));

  return {
    handleOnWithControlPanel,
    handleOnWithAddresses,
    handleOnCompactView,
    handleOnWithJournal,
    handleOnWithMap,
  };
};
